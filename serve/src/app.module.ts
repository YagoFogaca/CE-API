import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/database.module';
import { SupplyModule } from './supply/supply.module';
import { ModuleUser } from './user/user.module';

@Module({
  imports: [DatabaseModule, ModuleUser, SupplyModule],
})
export class AppModule {}
