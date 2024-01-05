import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(user: CreateUserDto): Promise<User> {
    return this.userRepository.save(user);
  }

  async getByUsername(username: string) {
    const result = await this.userRepository.findOne({ where: { username } });
    return result;
  }

  async update(username: string, _user: UpdateUserDto) {
    const user: User = await this.getByUsername(username);
    user.name = _user.name;
    user.updatedAt = new Date();
    this.userRepository.save(user);
  }

  delete(username: string) {
    return this.userRepository.delete({ username });
  }
}
