import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
import { Request, Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');
  // Раздача статических файлов
  app.useStaticAssets(join(__dirname, '../..', 'frontend', 'dist'));

  // Поддержка SPA (React Router)
  app.use((req: Request, res: Response, next: () => void): void => {
    if (!req.url.startsWith('/api')) {
      res.sendFile(join(__dirname, '../..', 'frontend', 'dist', 'index.html'));
    } else {
      next();
    }
  });

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
