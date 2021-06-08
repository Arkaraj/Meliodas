import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { CatsModule } from './cats/cats.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, CatsModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
