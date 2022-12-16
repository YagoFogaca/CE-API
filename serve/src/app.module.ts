import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/database.module';
import { ModuleUser } from './user/user.module';

@Module({
  imports: [PrismaModule, ModuleUser],
})
export class AppModule {}
