import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, versionKey: false })
export class ResourceS extends Document {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  education: string;

  @Prop()
  position: string;

  @Prop()
  skills: string;

  @Prop()
  hiredOn: string;

  @Prop()
  rating: number;
}

export const ResourceSchema = SchemaFactory.createForClass(ResourceS);
