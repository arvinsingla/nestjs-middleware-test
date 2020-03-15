import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response } from 'express';

function logger(req: Request, res: Response, next) {
  console.log(`req.url (Functional Middleware): `, req.url);
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  await app.listen(3000);
}
bootstrap();
