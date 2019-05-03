import { Module } from '@nestjs/common';
import { BakerygroupController } from './bakerygroup.controller';
import { BakerygroupService } from './bakerygroup.service';

@Module({
  controllers: [BakerygroupController],
  providers: [BakerygroupService]
})
export class BakerygroupModule {}
