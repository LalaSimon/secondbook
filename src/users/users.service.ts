import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async createUser(email: string, password: string): Promise<Users> {
    const user = this.usersRepository.create({
      email,
      password,
    });
    return this.usersRepository.save(user);
  }

  async getAllUsers(): Promise<Users[]> {
    return this.usersRepository.find();
  }
}
