import { Module } from '@nestjs/common';
import { ResourcesController } from './resources.controller';
import { ResourcesService } from './resources.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ResourceS, ResourceSchema } from 'src/schemas/resource.schema';
import { InterviewS, InterviewSchema } from 'src/schemas/interview.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ResourceS.name, schema: ResourceSchema },
      { name: InterviewS.name, schema: InterviewSchema },
    ]),
  ],
  controllers: [ResourcesController],
  providers: [ResourcesService],
})
export class ResourcesModule {}
