import {
  IsEmail,
  IsString,
  IsOptional,
  IsPhoneNumber,
  IsBoolean,
} from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  password: string;

  @IsString()
  @IsOptional()
  userAvatar: string;

  @IsPhoneNumber()
  @IsOptional()
  phoneNumber: string;

  @IsString()
  @IsOptional()
  firstname: string;

  @IsString()
  @IsOptional()
  lastname: string;

  @IsBoolean()
  @IsOptional()
  isActive: boolean;
}
