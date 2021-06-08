import { Injectable } from '@nestjs/common';
import { Cats } from '../../entities/Cats.entity';

@Injectable()
export class CatsService {
  public async getCats(): Promise<Cats[]> {
    const cats = await Cats.find();
    return cats;
  }
  public async getOneCat(catId: string): Promise<Cats | undefined> {
    const cat = await Cats.findOne(catId);
    return cat;
  }
}
