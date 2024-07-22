import { Expose } from 'class-transformer';

export class Book {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  author: string;

  @Expose()
  pages: string;

  @Expose()
  description: string;

  @Expose()
  bookCover: string;

  @Expose()
  publishYear: string;

  @Expose()
  publishingHouse: string;

  @Expose()
  type: string;
}
