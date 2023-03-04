import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   app.useGlobalPipes(new ValidationPipe());
   app.enableCors();

   const config = new DocumentBuilder()
      .setTitle('Controle de Estoque')
      .setVersion('1.0.1')
      .addBearerAuth()
      .build();
   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('api', app, document);

   const port = process.env.PORT || 3000;

   await app.listen(port);
}
bootstrap();
