import { Module } from '@nestjs/common';
import { BakerytypeController } from './bakerytype.controller';

@Module({
  controllers: [BakerytypeController]
})
export class BakerytypeModule {}
