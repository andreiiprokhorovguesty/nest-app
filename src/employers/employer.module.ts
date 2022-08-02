import { Module } from '@nestjs/common';
import EmployerController from './employer.controller';
import EmployerRepository from './employer.repository';
import EmployerService from './employer.service';

@Module({
  providers: [EmployerRepository, EmployerService],
  controllers: [EmployerController],
})
export default class EmployerModule {}
