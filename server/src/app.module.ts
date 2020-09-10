import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordsModule } from './records/records.module';
import { ResourcesModule } from './resources/resources.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.f38ch.mongodb.net/testDb?retryWrites=true&w=majority'),
    RecordsModule,
    ResourcesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
