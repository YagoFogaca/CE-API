import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/database.module';
import { ModuleUser } from './user/user.module';

@Module({
  imports: [DatabaseModule, ModuleUser],
})
export class AppModule {}
