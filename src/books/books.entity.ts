import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  pages: string;

  @Column()
  description: string;

  @Column()
  bookCover: string;

  @Column()
  publishYear: string;

  @Column()
  publishingHouse: string;

  @Column()
  type: string;
}
