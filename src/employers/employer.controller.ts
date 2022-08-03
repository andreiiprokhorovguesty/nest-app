import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Employer } from './employer';
import EmployerService from './employer.service';

@Controller('employers')
export default class EmployerController {
  constructor(private readonly employerService: EmployerService) {}

  @Get()
  async getAll(): Promise<Employer[]> {
    return this.employerService.getAll();
  }

  @Post()
  async create(@Body() data: Employer) {
    return this.employerService.create(data);
  }

  // @Get(':id')
  // getById(
  //   @Param(
  //     'id',
  //     new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
  //   )
  //   id: number,
  // ) {
  //   return this.employerService.getById(id);
  // }
}
