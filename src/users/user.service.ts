import { Injectable } from '@nestjs/common';
import { UserDto } from './user';
import UserRepository from './user.repository';

@Injectable()
export default class UserService {
  private readonly users: UserDto[] = [
    {
      name: 'Andreii',
      age: 45,
    },
    {
      name: 'Darinka',
      age: 31,
    },
  ];

  constructor(private readonly userRepository: UserRepository) {}

  async getAll(): Promise<UserDto[]> {
    return this.userRepository.getAll();
  }

  async getById(id: number): Promise<UserDto> {
    return this.userRepository.getAll()[id];
  }

  async create(user: UserDto): Promise<UserDto> {
    return this.userRepository.create(user);
  }
}
