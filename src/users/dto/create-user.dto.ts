import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  userAvatar: string;

  @IsPhoneNumber()
  @IsOptional()
  phoneNumber: string;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsBoolean()
  isActive: boolean;

  @IsDateString()
  created_at: string;

  @IsDateString()
  modified_at: string;
}
