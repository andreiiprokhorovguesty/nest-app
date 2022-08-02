import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { Employer } from './employer';
import EmployerService from './employer.service';

@Controller('employers')
export default class EmployerController {
  constructor(private readonly employerService: EmployerService) {}

  @Get()
  getAll(): Employer[] {
    return this.employerService.getAll();
  }

  @Get(':id')
  getById(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.employerService.getById(id);
  }
}
