import { Module } from '@nestjs/common';
import { BackryController } from './backry.controller';
import { BackryService } from './backry.service';

@Module({
  controllers: [BackryController],
  providers: [BackryService]
})
export class BackryModule {}
