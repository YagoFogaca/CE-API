import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/prisma/database.module';
import { ServiceUser } from 'src/user/service/user.service';
import { ModuleUser } from 'src/user/user.module';
import { SupplyRepository } from './service/supply.repository';
import { SupplyService } from './service/supply.service';
import { CreateSupplyUsecase } from './service/usecase/supply.create.usecase';
import { SupplyController } from './supply.controller';

@Module({
    imports: [DatabaseModule, ModuleUser],
    controllers: [SupplyController],
    providers: [SupplyRepository, SupplyService, CreateSupplyUsecase],
})
export class SupplyModule {}
