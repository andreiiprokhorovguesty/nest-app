import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import UserController from './user.controller';
import UserRepository from './user.repository';
import UserService from './user.service';
import UserControllerV1 from './userControllerV1';
import UserControllerV2 from './userControllerV2';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController, UserControllerV1, UserControllerV2],
  providers: [UserService, UserRepository],
})

export class UserModule {}
