import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/user.dto';
import { GoogleAuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() userDto: CreateUserDto) {
    return await this.authService.register(userDto);
  }

  @Delete('quit/:username')
  async deleteByUsername(@Param('username') username: string) {
    // 추후 token validation 로직 추가
    return await this.authService.delete(username);
  }

  @Get('login')
  @UseGuards(GoogleAuthGuard)
  async login() {}

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(@Request() req, @Response() res) {
    const { user } = req;
    return res.send(user);
  }
}
