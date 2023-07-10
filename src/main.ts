import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   // React 애플리케이션의 정적 파일 제공을 위한 설정
   app.use(express.static(join(__dirname, '..', 'client/build')));

  await app.listen(3000);
}
bootstrap();
