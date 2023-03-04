import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { EntrySupplyModule } from './entry/entry.module';
import { ExitSupplyModule } from './exit/exit.module';
import { DatabaseModule } from './prisma/database.module';
import { SupplyModule } from './supply/supply.module';
import { ModuleUser } from './user/user.module';

@Module({
   imports: [
      DatabaseModule,
      ModuleUser,
      SupplyModule,
      EntrySupplyModule,
      ExitSupplyModule,
      AuthModule,
   ],
})
export class AppModule {}
