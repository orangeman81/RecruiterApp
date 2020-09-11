import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Schema as schema } from 'mongoose';

@Schema({ timestamps: true, versionKey: false })
export class InterviewS extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  rating: number;

  @Prop(raw({ type: schema.Types.ObjectId, ref: 'ResourceS' }))
  resourceId: string;
}

export const InterviewSchema = SchemaFactory.createForClass(InterviewS);
