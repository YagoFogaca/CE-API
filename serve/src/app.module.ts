import { Module } from '@nestjs/common';
import { EntrySupplyModule } from './entry/entry.module';
import { DatabaseModule } from './prisma/database.module';
import { SupplyModule } from './supply/supply.module';
import { ModuleUser } from './user/user.module';

@Module({
   imports: [DatabaseModule, ModuleUser, SupplyModule, EntrySupplyModule],
})
export class AppModule {}
