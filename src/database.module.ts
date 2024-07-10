import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'szymonlala',
      password: 'lalapol3518',
      database: 'secondbook',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
