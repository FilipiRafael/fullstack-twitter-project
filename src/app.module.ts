import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { TweetsModule } from './tweets/tweets.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TweetsModule,
    MongooseModule.forRoot(
      'mongodb://root:root@db/analytics?authSource=admin',
      {
        useNewUrlParser: true,
      },
    ),
    TweetsModule,
  ],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}
