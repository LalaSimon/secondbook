import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Patch,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Serialize } from '../interceptor/serialize.interceptor';
import { UserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from './auth.service';

@Controller('/auth')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('/signup')
  singUp(@Body() user: CreateUserDto) {
    return this.authService.signup(user);
  }

  @Post('/signin')
  signIn(@Body() user: CreateUserDto) {
    return this.authService.signin(user.email, user.password);
  }

  @Get('/allUsers')
  getAll() {
    return this.userService.getAll();
  }

  @Get('/:id')
  async findUser(@Param('id') id: string) {
    const user = await this.userService.findOne(parseInt(id));
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.userService.delete(parseInt(id));
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.authService.updateUser(parseInt(id), body);
  }
}
