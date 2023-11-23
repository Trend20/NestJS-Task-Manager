import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';
import {
  LoggerMiddleware,
  logger,
} from './common/middleware/logger.middleware';
import { TasksController } from './tasks/tasks.controller';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

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

// How to Implement a middleware
// There is no place for implementing a middleware in the @module.
// We therefore implement it using the configure() method and module class.
// Modules that include a middleware must always implement the NestModule interface.
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('tasks');
  }
}

// We can also restrict the middleware to a specific request method by passing an
// object with the path and the method for the forRoutes() method when configuring the middleware
export class AppModule2 implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'tasks', method: RequestMethod.GET });
  }
}

// Route Wildcards
// Middleware supports route based patterns.
export class AppModule3 implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });
  }
}

// This route wildcard above will be applicable for : abcd, ab_cd, abecd.

// Middleware Consumer
// This is a helper class which provides several methods for managing the middleware.
// The forRoutes() method can take a single string, multiple strings a RouteInfo object, class controller or even multiple controllers.
// The apply() method may either take a SINGLE middleware or MULTIPLE arguments to specify multiple middlewares.

// Excluding Routes
// We can sometimes us exclude() to exclude routes where the middleware should not be applied to.
// This exclude() method can take a single string, multiple strings or a RouteInfo object.

export class AppModule4 implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'tasks', method: RequestMethod.GET },
        { path: 'tasks', method: RequestMethod.POST },
        'tasks/(.*)',
      )
      .forRoutes(TasksController);
  }
}

// With the example above, the middleware will be applied to all routes in TaskController expect the ones specified in the exclude() method.

// APPLYING A FUNCTIONAL MIDDLEWARE
export class AppModule5 implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes(TasksController);
  }
}

// APPLYING MULTIPLE MIDDLEWARES FOR SPECIFIC ROUTES
// In order to bind multiple middlewares that executes sequentially, simply provide a comma separated list inside the apply() method.
export class AppModule6 implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(cors(), helmet(), morgan('dev'), logger)
      .forRoutes(TasksController);
  }
}

// APPLYING GLOBAL MIDDLEWARES
// In order to apply global middlewares that are used across the project, we need to use the use() method that is supplied by the INestApplication interface
// This can be done inside the main.ts file where the application is initialized.
