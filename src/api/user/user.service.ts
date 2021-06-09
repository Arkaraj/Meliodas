import { Injectable } from '@nestjs/common';
import { Address } from '../../entities/Address.entity';
import { Cats } from '../../entities/Cats.entity';
import { User } from '../../entities/User.entity';

@Injectable()
export class UserService {
  async getUsers(): Promise<User[]> {
    const users = await User.createQueryBuilder('user')
      .leftJoinAndSelect('user.cats', 'cats')
      .getMany();
    return users;
  }
  async getOneUser(userId: string): Promise<User | undefined> {
    const user = await User.findOne(userId);
    return user;
  }

  async createUser() {
    await User.create({}).save();
  }

  async addAddressToUser(userId: string) {
    const address = await Address.create({}).save();
    const user = await User.findOne(userId);
    user.address = address;
    return await user.save();
  }

  async adoptKats(userId: string, catId: string) {
    const cats = await Cats.findOne(catId);
    const user = await User.findOne(userId);
    cats.ownerId = user.id;
    cats.owner = user;
    return await cats.save();
  }

  // TO-DO make all cats under this user again available
  async deleteUser(userId: string) {
    return await User.createQueryBuilder('user')
      .delete()
      .from(User)
      .where('user.id = :userId', { userId })
      .execute();
  }
}
