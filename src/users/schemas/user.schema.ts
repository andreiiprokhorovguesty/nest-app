import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: String })
  @IsNotEmpty()
  name: string;

  @Prop({ type: Number })
  @IsNotEmpty()
  age: number;

  @Prop({ type: String, required: false})
  location: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
