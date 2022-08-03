import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employer } from './employer';
import { EmployerDocument } from './schemas/employer.schema';

@Injectable()
export default class EmployerRepository {
  constructor(@InjectModel('Employer') private readonly model: Model<EmployerDocument>) { }

  async getAll(): Promise<Employer[]> {
    return this.model.find().exec();
  }

  /*async getById(id: number): Promise<Employer> {
    return this.model.fi;
  }*/

  async create(employer: Employer): Promise<Employer> {
    const newEmployer = new this.model(employer);
    return newEmployer.save();
  }
}
