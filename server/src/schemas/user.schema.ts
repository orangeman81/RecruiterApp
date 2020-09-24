import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: false, versionKey: false })
export class UserS extends Document {
  @Prop(raw({ type: String, unique: true }))
  username: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop()
  salt: string;

  @Prop()
  admin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(UserS);
