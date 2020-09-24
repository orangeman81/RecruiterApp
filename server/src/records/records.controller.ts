import {
  Controller,
  Post,
  Get,
  Body,
  Delete,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { RecordsService } from './records.service';
import { RecordDTO } from '../../../models/record';
import { AuthGuard } from '@nestjs/passport';

@Controller('records')
@UseGuards(AuthGuard('jwt'))
export class RecordsController {
  constructor(private recordService: RecordsService) {}

  @Post()
  async create(@Body() record: RecordDTO) {
    return this.recordService.create(record);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    return this.recordService.delete(id);
  }

  @Put(':id')
  async update(@Body() record: RecordDTO, @Param('id') id) {
    return this.recordService.update(record, id);
  }

  @Get()
  async findAll(): Promise<RecordDTO[]> {
    return this.recordService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<RecordDTO> {
    return this.recordService.findOne(id);
  }
}
