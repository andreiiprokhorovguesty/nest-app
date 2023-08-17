import {
  Controller,
  Get,
  VERSION_NEUTRAL,
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
}
