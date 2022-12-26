import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/prisma/database.module';
import { SupplyRepository } from './service/supply.repository';
import { SupplyService } from './service/supply.service';
import { SupplyController } from './supply.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [SupplyController],
  providers: [SupplyRepository, SupplyService],
})
export class SupplyModule {}
