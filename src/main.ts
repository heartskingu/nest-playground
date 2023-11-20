import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // URL of your Angular app
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP Methods
    allowedHeaders: 'Content-Type, Accept', // Allowed HTTP Headers
  });
  await app.listen(3000);
}
bootstrap();
