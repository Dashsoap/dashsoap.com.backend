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
import { CommentService } from './comment/comment.service';
import { CommentModule } from './comment/comment.module';
// import { CartController } from './cart/cart.controller';
import { CartModule } from './cart/cart.module';
import { BakerytypeService } from './bakerytype/bakerytype.service';
import { BakerytypeModule } from './bakerytype/bakerytype.module';
import { BakeryModule } from './bakery/bakery.module';
import { UploadModule } from './upload/upload.module';
@Module({
  imports: [TypeOrmModule.forRoot(), AuthModule, UserModule, AddressModule, CommentModule, CartModule, BakerytypeModule, BakeryModule, UploadModule],
  controllers: [AppController],
  providers: [{ provide: APP_GUARD, useClass: AppGuard }, AppService, CommentService, BakerytypeService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppMiddleware).forRoutes('*');
  }
}
