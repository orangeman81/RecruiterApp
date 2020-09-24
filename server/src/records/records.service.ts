import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RecordS } from 'src/schemas/record.schema';
import { Model } from 'mongoose';
import { RecordDTO } from '../../../models/record';

@Injectable()
export class RecordsService {
  constructor(@InjectModel(RecordS.name) private recModel: Model<RecordS>) {}

  async create(record: RecordDTO): Promise<RecordDTO> {
    const createdRecord = new this.recModel(record);
    await createdRecord.save();
    return createdRecord.toObject({ versionKey: false });
  }

  async delete(id: string): Promise<any> {
    return this.recModel.findOneAndDelete({ _id: id });
  }

  async update(record: RecordDTO, id: string): Promise<any> {
    return this.recModel.findOneAndUpdate({ _id: id }, record, {
      new: true,
      useFindAndModify: false,
    });
  }

  async findAll(): Promise<RecordDTO[]> {
    return this.recModel.find().exec();
  }

  async findOne(recordId: string): Promise<RecordDTO> {
    return this.recModel.findOne({ _id: recordId }).exec();
  }
}
