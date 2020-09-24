import {
  Controller,
  Body,
  Param,
  Delete,
  Post,
  Put,
  Get,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { Resource, ResourceDTO } from '../../../models/resource';
import { AuthGuard } from '@nestjs/passport';

@Controller('resources')
@UseGuards(AuthGuard('jwt'))
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
  async findAll(): Promise<ResourceDTO[]> {
    return this.resourceService.findAll();
  }

  @Get('search')
  async search(@Query('query') query: string): Promise<ResourceDTO[]> {
    return this.resourceService.search(query);
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<ResourceDTO> {
    return this.resourceService.findOne(id);
  }
}
