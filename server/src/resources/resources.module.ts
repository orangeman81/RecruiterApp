import { Module } from '@nestjs/common';
import { ResourcesController } from './resources.controller';
import { ResourcesService } from './resources.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ResourceS, ResourceSchema } from 'src/schemas/resource.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ResourceS.name, schema: ResourceSchema },
    ]),
  ],
  controllers: [ResourcesController],
  providers: [ResourcesService],
})
export class ResourcesModule {}
