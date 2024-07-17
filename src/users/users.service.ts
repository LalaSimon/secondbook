import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async create(email: string, password: string): Promise<Users> {
    const existingUser = await this.usersRepository.findOne({
      where: { email },
    });

    if (!existingUser) {
      const user = this.usersRepository.create({
        email,
        password,
      });
      return this.usersRepository.save(user);
    } else throw new BadRequestException('User with this email already exist!');
  }

  async getAll(): Promise<Users[]> {
    return await this.usersRepository.find();
  }

  async delete(id: number) {
    const exisitingUser = await this.usersRepository.findOne({
      where: { id },
    });
    if (exisitingUser) {
      await this.usersRepository.delete(exisitingUser);
      return exisitingUser;
    } else throw new NotFoundException('user not found');
  }
}
