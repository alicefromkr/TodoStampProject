import {
  Body,
  Controller,
  // Delete,
  Get,
  Param,
  // Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  // @Post('/create')
  // create(@Body() user: CreateUserDto) {
  //   return this.userService.create(user);
  // }

  @Get('/:username')
  async getByUsername(@Param('username') username: string) {
    return await this.userService.getByUsername(username);
  }

  @Put('/:username')
  async updateByUsername(
    @Param('username') username: string,
    @Body() user: UpdateUserDto,
  ) {
    return await this.userService.update(username, user);
  }

  // @Delete('/:username')
  // async deleteByUsername(@Param('username') username: string) {
  //   return await this.userService.delete(username);
  // }
}
