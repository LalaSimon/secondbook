import { IsBoolean, IsEmail, IsPhoneNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  userAvatar: string;

  @IsPhoneNumber()
  phoneNumber: string;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsBoolean()
  isActive: boolean;
}
