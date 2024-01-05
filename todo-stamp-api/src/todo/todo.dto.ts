import { IsNumber, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsNumber()
  alimjangId: number;
}

export class UpdateTodoDto {
  @IsString()
  title: string;

  @IsString()
  content: string;
}
