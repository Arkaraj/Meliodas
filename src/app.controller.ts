import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Controllers is like routes
@Controller()
export class ApiController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoute(): string {
    return this.appService.getRoutes();
  }

  // @Get()
  // getAllCats():string {

  // }
}
