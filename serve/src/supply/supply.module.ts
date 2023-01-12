import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/prisma/database.module';
import { ModuleUser } from 'src/user/user.module';
import { SupplyRepository } from './service/supply.repository';
import { SupplyService } from './service/supply.service';
import { CreateSupplyUsecase } from './service/usecase/supply.create.usecase';
import { DeleteSupplyUsecase } from './service/usecase/supply.delete.usecase';
import { FindAllSupplyUsecase } from './service/usecase/supply.findAll.usecase';
import { FindByIdSupplyUsecase } from './service/usecase/supply.findById.usecase';
import { UpdateSupplyUsecase } from './service/usecase/supply.update.usecase';
import { SupplyController } from './supply.controller';

@Module({
   imports: [DatabaseModule, ModuleUser],
   controllers: [SupplyController],
   providers: [
      SupplyService,
      CreateSupplyUsecase,
      FindAllSupplyUsecase,
      FindByIdSupplyUsecase,
      DeleteSupplyUsecase,
      UpdateSupplyUsecase,
      SupplyRepository,
   ],
})
export class SupplyModule {}
