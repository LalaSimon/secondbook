import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/users.entity';

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
  ],
})
export class DatabaseModule {}
