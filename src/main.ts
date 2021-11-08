import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  // Create an instance
  // App listen incomming traffic
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}
// invoke instance of app
bootstrap();
