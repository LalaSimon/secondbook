import { UserService } from './users.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async hashingPassword(password: string) {
    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    const result = salt + '.' + hash.toString('hex');
    return result;
  }

  async updateUser(id: number, attrs: UpdateUserDto) {
    const user = await this.usersService.findOne(id);
    if (!user) throw new NotFoundException('User not found');

    attrs.password = await this.hashingPassword(attrs.password);
    attrs.modified_at = new Date().toISOString();
    Object.assign(user, attrs);

    const updatedUser = await this.usersService.update(user);

    return updatedUser;
  }

  async signup(user: CreateUserDto) {
    const users = await this.usersService.find(user.email);

    if (users.length) {
      throw new BadRequestException('email in use');
    }

    const hashedPassword = await this.hashingPassword(user.password);

    user.password = hashedPassword;
    user.created_at = new Date().toISOString();
    user.modified_at = new Date().toISOString();

    const newUser = await this.usersService.create(user);

    return newUser;
  }

  async signin(email: string, password: string) {
    const [user] = await this.usersService.find(email);
    user.isActive = true;
    user.lastLogin = new Date().toISOString();
    await this.usersService.update(user);

    if (!user) {
      throw new NotFoundException('User not found');
    }
    const [salt, storedHash] = user.password.split('.');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('bad password');
    } else {
      return user;
    }
  }

  async signout(id: number) {
    const user = await this.usersService.findOne(id);
    user.isActive = false;
    return this.usersService.update(user);
  }
}
