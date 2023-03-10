import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  _id?: Types.ObjectId;

  @Prop()
  active: boolean;

  @Prop()
  password: string;

  @Prop({ unique: true })
  email: string;

  @Prop({
    type: Object,
    default: { refresh_token: null, confirmation_token: null },
  })
  tokens?: {
    refresh_token: string;
    confirmation_token: string;
  };
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
