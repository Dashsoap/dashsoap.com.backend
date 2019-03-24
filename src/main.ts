import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppExceptionFilter } from './http-exception.filter';
import { AppInterceptor } from './app.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AppExceptionFilter());
  app.useGlobalInterceptors(new AppInterceptor());
  await app.listen(3333,()=>{
    console.log("server is running on http://localhost:3333")
  });
}
bootstrap();
