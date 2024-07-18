import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from './users.module'; // Adjust the path as necessary

@Module({
  imports: [UsersModule],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
