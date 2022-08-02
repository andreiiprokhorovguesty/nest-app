import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import EmployerModule from 'src/employers/employer.module';
import { UserSchema } from 'src/mongo/schemas/user.schema';
import UserController from './user.controller';
import UserRepository from './user.repository';
import UserService from './user.service';

@Module({
  imports: [
    EmployerModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
