import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

    const book = await this.find(body.title);

    if (book.length) throw new BadRequestException('book already in base');

    const newBook = this.repo.create(body);

    return this.repo.save(newBook);
  }

  async findOne(id: number) {
    if (!id) return null;

    const book = await this.repo.findOne({ where: { id } });

    if (!book) {
      throw new NotFoundException('Book not found');
    } else return book;
  }

  async find(title: string) {
    return this.repo.find({ where: { title } });
  }

  async findAll() {
    return this.repo.find();
  }

  async deleteBook(id: number) {
    if (!id) return null;

    const book = await this.findOne(id);

    return this.repo.remove(book);
  }
}
