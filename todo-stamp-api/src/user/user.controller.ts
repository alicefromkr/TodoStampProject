import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/create')
  create(@Body() user: User) {
    return this.userService.create(user);
  }

  @Get('/:username')
  async getByEmail(@Param('username') email: string) {
    return await this.userService.getByUsername(email);
  }

  @Put('/:username')
  async updateByUsername(@Param('username') email: string, @Body() user: User) {
    return await this.userService.update(email, user);
  }

  @Delete('/:username')
  async deleteByUsername(@Param('username') username: string) {
    return await this.userService.delete(username);
  }
}
