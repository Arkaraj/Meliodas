import { Injectable } from '@nestjs/common';
import { Cats } from '../../entities/Cats.entity';
import { CatsDto } from './cats.dto';

@Injectable()
export class CatsService {
  public async getCats(): Promise<Cats[]> {
    const cats = await Cats.createQueryBuilder('cats')
      .leftJoinAndSelect('cats.owner', 'owner')
      .getMany();
    return cats;
  }
  public async getOneCat(catId: string): Promise<Cats | undefined> {
    const cat = await Cats.findOne(catId);
    return cat;
  }
  public async createCat(kat: CatsDto) {
    const cat = await Cats.create({
      name: kat.name,
      description: kat.description,
      breed: kat.breed,
      colour: kat.colour,
      gender: kat.gender,
      weight: kat.weight,
      ownerId: null,
    }).save();
    return cat;
  }

  public async updateCatAvailability(catId: string, available: boolean) {
    const cats = await Cats.findOne(catId);
    cats.isavailable = available;
    return await cats.save();
  }

  public async updatePetPoints(catId: string) {
    const cats = await Cats.findOne(catId);
    cats.petPoints += 2;
    return await cats.save();
  }

  public async deleteCat(catId: string) {
    return await Cats.createQueryBuilder('cats')
      .delete()
      .from(Cats)
      .where('cats.id = :catId', { catId })
      .execute();
  }
}
