import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { GlobalExceptionFilter } from './Common/Filters/global.exception.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  app.useGlobalFilters(new GlobalExceptionFilter());
  const options = new DocumentBuilder()
    .setTitle('Support APIs')
    .setDescription("This is Support project's api document")
    .setVersion('0.1')
    .addTag('dev 0.1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000);
  console.log('server start on Port:', process.env.PORT || 3000);
}
bootstrap();
