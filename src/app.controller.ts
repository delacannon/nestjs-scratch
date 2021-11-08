import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  // GET decorator HTTP calls
  @Get("/asdf")
  getRootRoute() {
    return "Hi there!";
  }
  @Get("hello")
  getHellWorld() {
    return "Hello World!";
  }
}
