import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AppGuard } from './app.guard';
import { APP_GUARD } from '@nestjs/core';
import { AppMiddleware } from './app.middleware';
import { AddressModule } from './address/address.module';
import { BackryModule } from './backry/backry.module';
import { BackrygroupModule } from './backrygroup/backrygroup.module';
@Module({
  imports: [TypeOrmModule.forRoot(), AuthModule, UserModule, AddressModule, BackryModule, BackrygroupModule],
  controllers: [AppController],
  providers: [{ provide: APP_GUARD, useClass: AppGuard }, AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppMiddleware).forRoutes('*');
  }
}
