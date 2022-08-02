import { Injectable } from '@nestjs/common';
import { Employer } from './employer';

@Injectable()
export default class EmployerRepository {
  private readonly employers: Employer[] = [
    {
      name: 'Apple',
      location: 'USA',
    },
    {
      name: 'Adidas',
      location: 'Germany',
    },
  ];

  getAll(): Employer[] {
    return this.employers;
  }

  getById(id: number): Employer {
    return this.employers[id];
  }
}
