import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ApiController, AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/User.entity';
import { Address } from './entities/Address.entity';
import { Cats } from './entities/Cats.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [User, Address, Cats], // src/entities/*.entity{.ts,.js}
      synchronize: false,
    }),
  ],
  controllers: [ApiController, AppController],
  providers: [AppService],
})
export class AppModule {}
