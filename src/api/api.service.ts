import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  public getRoutes(): string {
    return 'Api Routes';
  }
}
