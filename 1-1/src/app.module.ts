import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import userModule from './user/user.module';
import AuthModule from './auth/auth.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/HW_21'), userModule, AuthModule],
})

export class AppModule {}
