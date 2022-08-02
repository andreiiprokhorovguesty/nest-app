import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { User } from './user';
import UserService from './user.service';

@Controller('users')
export default class UserController {
  private userService: UserService;

  constructor(moduleRef: ModuleRef) {
    this.userService = moduleRef.get(UserService);
  }

  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.getById(id);
  }

  @Post()
  async addUser(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }
}
