import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto, UpdateTodoDto } from './todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post('/create')
  create(@Body() todo: CreateTodoDto) {
    return this.todoService.create(todo);
  }

  @Get('/:id')
  async getById(@Param('id') id: number) {
    return await this.todoService.getById(id);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() todo: UpdateTodoDto) {
    return await this.todoService.update(id, todo);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.todoService.delete(id);
  }
}
