import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/user.dto';

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
}
