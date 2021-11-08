import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

// Decorator -> telling nest to create a controller
@Controller()
class AppController {
  // GET decorator HTTP calls
  @Get()
  getRootRoute() {
    return "Hi there!";
  }
}

@Module({
  controllers: [AppController],
})
class AppModule {}

async function bootstrap() {
  // Create an instance
  // App listen incomming traffic
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}
// invoke instance of app
bootstrap();
