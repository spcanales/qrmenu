import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap(): Promise<void>
{
    const app: INestApplication = await NestFactory.create(AppModule);
    app.use('/public', express.static(join(__dirname, '../public')));
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(3000);
}
bootstrap();
