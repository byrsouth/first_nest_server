import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Request: ${req.protocol}://${req.headers.host}${req.baseUrl}`);
    console.log(`Params: ${req.params.id}`);
    console.log(`Method: ${req.method}`);
    next();
  }
}
