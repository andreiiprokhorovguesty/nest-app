import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { UserDto } from './user';

export default class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async getAll(): Promise<UserDto[]> {
    return this.userModel.find().exec();
  }

  async create(user: UserDto): Promise<UserDto> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }
}
