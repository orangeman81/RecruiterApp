import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: { createdAt: 'created_at' } })
export class RecordS extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  value: number;

  @Prop()
  type: string;

  @Prop()
  code: string;
}

export const RecordSchema = SchemaFactory.createForClass(RecordS);
