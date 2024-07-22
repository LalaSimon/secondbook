import { IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsString()
  pages: string;

  @IsString()
  description: string;

  @IsString()
  bookCover: string;

  @IsString()
  publishYear: string;

  @IsString()
  publishingHouse: string;

  @IsString()
  type: string;
}
