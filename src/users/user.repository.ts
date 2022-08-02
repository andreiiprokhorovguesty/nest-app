import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/mongo/schemas/user.schema';
import { User } from './user';

export default class UserRepository {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  async getAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }
}
