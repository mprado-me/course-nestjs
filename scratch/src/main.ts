import { Controller, Get, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return "Hello World!";
  }
}

@Module({
  controllers: [AppController],
})
class AppModule {

}

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.listen(3000);
}

bootstrap();
