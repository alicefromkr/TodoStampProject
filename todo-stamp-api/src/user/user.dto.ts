import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  username: string;

  @IsString()
  name: string;

  @IsString()
  providerId: string;
}

export class UpdateUserDto {
  @IsString()
  name: string;
}
