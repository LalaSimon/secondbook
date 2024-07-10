import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/apples')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/greens')
  getHello(): string {
    return this.appService.getHello();
  }
}
