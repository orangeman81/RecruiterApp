import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RecordS } from 'src/schemas/record.schema';
import { Model } from 'mongoose';
import { Record } from '../../../models/record';

@Injectable()
export class RecordsService {
  constructor(@InjectModel(RecordS.name) private recModel: Model<RecordS>) {}

  async create(record: Record): Promise<Record> {
    const createdRecord = new this.recModel(record);
    await createdRecord.save();
    return createdRecord.toObject({ versionKey: false });
  }

  async delete(id: string): Promise<any> {
    return this.recModel.findOneAndDelete({ _id: id });
  }

  async update(record: Record, id: string): Promise<any> {
    return this.recModel.findOneAndUpdate({ _id: id }, record, {
      new: true,
      useFindAndModify: false,
    });
  }

  async findAll(): Promise<Record[]> {
    return this.recModel.find().exec();
  }

  async findOne(recordId: string): Promise<Record> {
    return this.recModel.findOne({ _id: recordId }).exec();
  }
}
