import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddressDto } from './address.dto';
import { UserDto } from './user.dto';
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
  public async createUser(@Body() usr: UserDto) {
    return await this.userService.createUser(usr);
  }

  @Post('/:userId/:catId')
  public async adoptCat(
    @Param('userId') uid: string,
    @Param('catId') cid: string,
  ) {
    return await this.userService.adoptKats(uid, cid);
  }

  @Put('/:userId')
  public async addAddress(
    @Param('userId') uid: string,
    @Body() addr: AddressDto,
  ) {
    return await this.userService.addAddressToUser(uid, addr);
  }

  @Delete('/:userId')
  public async deleteUser(@Param('userId') uid: string) {
    return this.userService.deleteUser(uid);
  }
}
