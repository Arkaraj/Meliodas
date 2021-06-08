import { Injectable } from '@nestjs/common';
import { User } from '../../entities/User.entity';

@Injectable()
export class UserService {
  async getUsers(): Promise<User[]> {
    const users = await User.find();
    return users;
  }
  async getOneUser(userId: string): Promise<User | undefined> {
    const user = await User.findOne(userId);
    return user;
  }
}
