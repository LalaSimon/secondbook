import { Offers } from 'src/offers/offers.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

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

  @Column({
    nullable: true,
  })
  lastLogin: string;

  @Column()
  created_at: string;

  @Column()
  modified_at: string;

  @OneToMany(() => Offers, (offer) => offer.id)
  offers_created: Offers[];

  @ManyToMany(() => Offers)
  @JoinTable()
  offers_send: Offers[];
}
