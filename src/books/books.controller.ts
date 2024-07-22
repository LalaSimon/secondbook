import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
    return this.booksService.addBook(book);
  }

  @Get('/:id')
  getBook(@Param('id') id: string) {
    return this.booksService.findOne(parseInt(id));
  }

  @Get()
  getAllBooks() {
    return this.booksService.findAll();
  }

  @Delete('/:id')
  deleteBook(@Param('id') id: string) {
    return this.booksService.deleteBook(parseInt(id));
  }
}
