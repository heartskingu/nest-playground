import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MockDbService } from './mock-db/mock-db.service';
import { GemApiController } from './gem-api/gem-api.controller';

@Module({
  imports: [],
  controllers: [AppController, GemApiController],
  providers: [AppService, MockDbService],
})
export class AppModule {}
