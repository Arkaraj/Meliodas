import { Controller, Get, Param } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('api/cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async GetAllCats() {
    return this.catsService.getCats();
  }

  @Get(':id')
  async GetCatById(@Param('id') id: string) {
    return this.catsService.getOneCat(id);
  }
}
