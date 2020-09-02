import { Module } from '@nestjs/common';
import { RecordsService } from './records.service';
import { RecordsController } from './records.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordS, RecordSchema } from 'src/schemas/record.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: RecordS.name, schema: RecordSchema }])],
  providers: [RecordsService],
  controllers: [RecordsController]
})
export class RecordsModule {}
