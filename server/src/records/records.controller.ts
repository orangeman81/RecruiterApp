import {
  Controller,
  Post,
  Get,
  Body,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { RecordsService } from './records.service';
import { Record } from '../../../models/record';

@Controller('records')
export class RecordsController {
  constructor(private recordService: RecordsService) {}

  @Post()
  async create(@Body() record: Record) {
    return this.recordService.create(record);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    return this.recordService.delete(id);
  }

  @Put(':id')
  async update(@Body() record: Record, @Param('id') id) {
    return this.recordService.update(record, id);
  }

  @Get()
  async findAll(): Promise<Record[]> {
    return this.recordService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Record> {
    return this.recordService.findOne(id);
  }
}
