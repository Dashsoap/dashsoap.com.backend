import { Module } from '@nestjs/common';
import { BackrygroupController } from './backrygroup.controller';
import { BackrygroupService } from './backrygroup.service';

@Module({
  controllers: [BackrygroupController],
  providers: [BackrygroupService]
})
export class BackrygroupModule {}
