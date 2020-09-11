import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, versionKey: false })
export class ResourceS extends Document {
  @Prop(raw({ type: String, index: true }))
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
}

export const ResourceSchema = SchemaFactory.createForClass(ResourceS);
