import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { AuthService } from './auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UserService, AuthService],
  exports: [UserService, AuthService],
})
export class UsersModule {}
