import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3004;

  console.log(`Listning in http://localhost:${port}`);
  await app.listen(port);
}
bootstrap();
