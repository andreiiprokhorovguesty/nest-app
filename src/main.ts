import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    //logger: false
  });

  app.useGlobalPipes(new ValidationPipe({
    // disableErrorMessages: true,
    transform: true,
    whitelist: true, 
    forbidNonWhitelisted: true
  }));

  app.enableVersioning({
    type: VersioningType.URI,
  });

  await app.listen(3000);
}
bootstrap();
