import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { UserService } from './users.service';

import { CreateUserDto } from './dto/create-user.dto';
import { Serialize } from './interceptor/serialize.interceptor';
import { UserDto } from './dto/user.dto';

@Controller('users')
@Serialize(UserDto)
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() { email, password }: CreateUserDto) {
    return this.userService.create(email, password);
  }

  @Get('/allUsers')
  getAll() {
    return this.userService.getAll();
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
