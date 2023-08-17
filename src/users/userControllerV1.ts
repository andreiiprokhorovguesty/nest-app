import { Controller, Get, Param, ParseIntPipe, Post, Body } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { CreateUserDto } from "./schemas/createUserDto";
import { UserDto } from "./user";
import UserService from "./user.service";

@Controller({ path: 'users', version: '1' })
export default class UserControllerV1 {
  private userService: UserService;

  constructor(moduleRef: ModuleRef) {
    this.userService = moduleRef.get(UserService);
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<UserDto> {
    return this.userService.getById(id);
  }

  @Post()
  async addUser(@Body() user: CreateUserDto): Promise<UserDto> {
    return this.userService.create(user);
  }
}
