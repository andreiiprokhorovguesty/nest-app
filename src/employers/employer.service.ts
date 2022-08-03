import { Injectable } from '@nestjs/common';
import { Employer } from './employer';
import EmployerRepository from './employer.repository';

@Injectable()
export default class EmployerService {
  constructor(private readonly employerRepository: EmployerRepository) {}

  async getAll(): Promise<Employer[]> {
    return this.employerRepository.getAll();
  }

  async create(employer): Promise<Employer> {
    return this.employerRepository.create(employer);
  }

  // getById(id: number): Employer {
  //   return this.employerRepository.getById(id);
  // }
}
