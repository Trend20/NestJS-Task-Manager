import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { logger } from './common/middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // apply middlewares
  app.use(logger);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
