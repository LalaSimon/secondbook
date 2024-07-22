import { Body, Controller, Post } from '@nestjs/common';
import { Serialize } from 'src/interceptor/serialize.interceptor';
import { Book } from './dto/book.dto';
import { CreateBookDto } from './dto/create-book';
import { BooksService } from './books.service';

@Controller('books')
@Serialize(Book)
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('/addBook')
  addBook(@Body() book: CreateBookDto) {
    console.log(book);
    return this.booksService.addBook(book);
  }
}
