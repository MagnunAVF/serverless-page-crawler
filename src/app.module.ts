import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrawlController } from './crawl/crawl.controller';

@Module({
  imports: [],
  controllers: [AppController, CrawlController],
  providers: [AppService],
})
export class AppModule {}
