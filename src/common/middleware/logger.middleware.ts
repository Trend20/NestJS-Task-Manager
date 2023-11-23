// Nest middleware supports dependency injection just like the providers.

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// class middleware
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`This is the response ${res}`);
    next();
  }
}

// functional middleware
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`This is the response ${res}`);
  next();
}
