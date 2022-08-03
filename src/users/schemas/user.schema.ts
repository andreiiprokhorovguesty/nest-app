import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: String })
  name: string;

  @Prop({ type: Number })
  age: number;
}
 
export const UserSchema = SchemaFactory.createForClass(User);
