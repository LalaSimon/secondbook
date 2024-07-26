import { Users } from 'src/users/users.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Offers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  created_at: string;

  @Column()
  modified_at: string;

  @ManyToOne(() => Users, (user) => user.id)
  creator_id: Users;

  @ManyToMany(() => Users)
  @JoinTable()
  receivers: Users[];
}
