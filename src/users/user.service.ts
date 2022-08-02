import { Injectable } from '@nestjs/common';
import { User } from './user';
import UserRepository from './user.repository';

@Injectable()
export default class UserService {
  private readonly users: User[] = [
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

  async getAll(): Promise<User[]> {
    return this.userRepository.getAll();
  }

  async getById(id: number): Promise<User> {
    return this.userRepository.getAll()[id];
  }

  async create(user: User): Promise<User> {
    return this.userRepository.create(user);
  }
}
