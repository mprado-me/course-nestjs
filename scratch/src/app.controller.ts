import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {
  @Get()
  getRootRoute() {
    return "Hello World!!!";
  }

  @Get('/bye')
  getByThere() {
    return "Bye there!"
  }
}
