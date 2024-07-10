import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/users.entity';
import { UsersController } from './users/users.controller';
import { UserService } from './users/users.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'szymonlala',
      password: 'lalapol3518',
      database: 'secondbook',
      entities: [Users],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Users]),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UserService],
})
export class AppModule {}
