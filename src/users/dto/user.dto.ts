import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  email: string;

  @Expose()
  userAvatar: string;

  @Expose()
  phoneNumber: string;

  @Expose()
  firstname: string;

  @Expose()
  lastname: string;

  @Expose()
  isActive: boolean;

  @Expose()
  created_at: Date;

  @Expose()
  modified_at: Date;
}
