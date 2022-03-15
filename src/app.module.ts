import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [TweetsModule],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}
