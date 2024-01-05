import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDto, UpdateTodoDto } from './todo.dto';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  create(todo: CreateTodoDto): Promise<Todo> {
    return this.todoRepository.save(todo);
  }
  async getById(id: number) {
    const result = this.todoRepository.findOne({ where: { id } });
    return result;
  }

  async update(id: number, _todo: UpdateTodoDto) {
    const todo: Todo = await this.getById(id);
    if (todo) {
      todo.title = _todo.title;
      todo.content = _todo.content;
      todo.updatedAt = new Date();
      this.todoRepository.save(todo);
    } else {
      throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
    }
  }

  delete(id: number) {
    return this.todoRepository.delete({ id });
  }
}
