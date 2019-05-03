import { Module } from '@nestjs/common';
import { BakeryService } from './bakery.service';

@Module({
  providers: [BakeryService]
})
export class BakeryModule {}
