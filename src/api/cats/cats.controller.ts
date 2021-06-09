import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
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

  @Post()
  async CreateCat() {
    return this.catsService.createCat();
  }

  @Put(':id')
  async UpdateCatsAvailability(
    @Param('id') id: string,
    @Body('available') bool: boolean,
  ) {
    return this.catsService.updateCatAvailability(id, bool);
  }

  @Patch(':id')
  async UpdateCatsLikebility(@Param('id') id: string) {
    return this.catsService.updatePetPoints(id);
  }

  @Delete(':id')
  async DeleteCatById(@Param('id') id: string) {
    return this.catsService.deleteCat(id);
  }
}
