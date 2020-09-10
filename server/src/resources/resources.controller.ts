import {
  Controller,
  Body,
  Param,
  Delete,
  Post,
  Put,
  Get,
} from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { Resource } from '../../../models/resource';

@Controller('resources')
export class ResourcesController {
  constructor(private resourceService: ResourcesService) {}

  @Post()
  async create(@Body() resource: Resource) {
    return this.resourceService.create(resource);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    return this.resourceService.delete(id);
  }

  @Put(':id')
  async update(@Body() resource: Resource, @Param('id') id) {
    return this.resourceService.update(resource, id);
  }

  @Get()
  async findAll(): Promise<Resource[]> {
    return this.resourceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Resource> {
    return this.resourceService.findOne(id);
  }
}
