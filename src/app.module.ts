import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    TasksModule,
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
    ConfigModule.forRoot({ isGlobal: true }),
    BooksModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
