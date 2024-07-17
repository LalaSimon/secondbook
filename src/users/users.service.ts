import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly repo: Repository<Users>,
  ) {}

  async findOne(id: number) {
    if (!id) return null;
    return this.repo.findOne({ where: { id } });
  }

  async find(email: string) {
    return this.repo.find({ where: { email } });
  }

  async create(email: string, password: string): Promise<Users> {
    const user = this.repo.create({
      email,
      password,
    });
    return this.repo.save(user);
  }

  async getAll(): Promise<Users[]> {
    return await this.repo.find();
  }

  async delete(id: number) {
    const user = await this.findOne(id);

    if (user) {
      await this.repo.remove(user);

      return user;
    } else throw new NotFoundException('user not found');
  }

  async update(id: number, attrs: UpdateUserDto) {
    const user = await this.findOne(id);

    if (!user) throw new NotFoundException('User not found');
    Object.assign(user, attrs);

    return this.repo.save(user);
  }
}
