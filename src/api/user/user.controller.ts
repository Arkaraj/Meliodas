import { Controller, Get, Param } from '@nestjs/common';
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
}
