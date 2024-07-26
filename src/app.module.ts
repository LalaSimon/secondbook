import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Users } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { Books } from './books/books.entity';
import { OffersModule } from './offers/offers.module';
import { Offers } from './offers/offers.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'szymonlala',
      password: 'lalapol3518',
      database: 'secondbook',
      entities: [Users, Books, Offers],
      synchronize: true,
    }),
    UsersModule,
    BooksModule,
    OffersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
