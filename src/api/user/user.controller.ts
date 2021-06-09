import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  public async GetAllUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  public async GetOneUser(@Param('id') id: string) {
    return this.userService.getOneUser(id);
  }

  @Post()
  public async createUser() {
    return this.userService.createUser();
  }

  @Post('/:userId/:catId')
  public async adoptCat(
    @Param('userId') uid: string,
    @Param('catId') cid: string,
  ) {
    return this.userService.adoptKats(uid, cid);
  }

  @Put('/:userId')
  public async addAddress(@Param('userId') uid: string) {
    return this.userService.addAddressToUser(uid);
  }

  @Delete('/:userId')
  public async deleteUser(@Param('userId') uid: string) {
    return this.userService.deleteUser(uid);
  }
}
