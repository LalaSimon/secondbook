import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book';
import { Books } from './books.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Books)
    private repo: Repository<Books>,
  ) {}

  async addBook(body: CreateBookDto) {
    if (!body) return null;

    const book = this.repo.create(body);

    return this.repo.save(book);
  }
}
