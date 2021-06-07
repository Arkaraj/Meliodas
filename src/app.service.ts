import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome To Meliodas, a Cats Rest Api!';
  }
  getRoutes(): string {
    return 'Api Routes';
  }
}
