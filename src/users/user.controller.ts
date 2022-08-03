import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { UserDto } from './user';
import UserService from './user.service';

@Controller('users')
export default class UserController {
  private userService: UserService;

  constructor(moduleRef: ModuleRef) {
    this.userService = moduleRef.get(UserService);
  }

  @Get()
  async getAll(): Promise<UserDto[]> {
    return this.userService.getAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<UserDto> {
    return this.userService.getById(id);
  }

  @Post()
  async addUser(@Body() user: UserDto): Promise<UserDto> {
    return this.userService.create(user);
  }
}
