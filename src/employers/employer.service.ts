import { Injectable } from '@nestjs/common';
import { Employer } from './employer';
import EmployerRepository from './employer.repository';

@Injectable()
export default class EmployerService {
  constructor(private readonly employerRepository: EmployerRepository) {}

  getAll(): Employer[] {
    return this.employerRepository.getAll();
  }

  getById(id: number): Employer {
    return this.employerRepository.getById(id);
  }
}
