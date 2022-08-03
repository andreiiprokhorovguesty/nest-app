import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import EmployerController from './employer.controller';
import EmployerRepository from './employer.repository';
import EmployerService from './employer.service';
import { EmployerSchema } from './schemas/employer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Employer', schema: EmployerSchema }])],
  providers: [EmployerRepository, EmployerService],
  controllers: [EmployerController],
})

export default class EmployerModule { }
