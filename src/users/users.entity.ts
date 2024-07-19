import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  userAvatar: string;

  @Column()
  email: string;

  @Column({
    nullable: true,
  })
  phoneNumber: string;

  @Column()
  password: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  isActive: boolean;

  @Column()
  created_at: string;

  @Column()
  modified_at: string;
}
