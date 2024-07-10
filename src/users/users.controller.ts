import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() { email, password }: { email: string; password: string }) {
    console.log(email, password);
    return this.userService.createUser(email, password);
  }

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
