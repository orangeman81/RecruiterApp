import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ResourceS } from 'src/schemas/resource.schema';
import { Resource, ResourceDTO } from '../../../models/resource';
import { Model } from 'mongoose';

@Injectable()
export class ResourcesService {
  constructor(
    @InjectModel(ResourceS.name) private recModel: Model<ResourceS>,
  ) {}

  async create(resource: Resource): Promise<Resource> {
    const createdResource = new this.recModel(resource);
    await createdResource.save();
    return createdResource.toObject({ versionKey: false });
  }

  async delete(id: string): Promise<any> {
    return this.recModel.findOneAndDelete({ _id: id });
  }

  async update(resource: Resource, id: string): Promise<any> {
    return this.recModel.findOneAndUpdate({ _id: id }, resource, {
      new: true,
      useFindAndModify: false,
    });
  }

  async findAll(): Promise<ResourceDTO[]> {
    return this.recModel.find().exec();
  }

  async search(query: string): Promise<ResourceDTO[]> {
    return this.recModel.find({ $text: { $search: `${query}` } }).exec();
  }

  async findOne(resourceId: string): Promise<ResourceDTO> {
    return this.recModel.findOne({ _id: resourceId }).exec();
  }
}
