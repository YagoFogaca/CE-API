import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'src/prisma/database.module';
import { SupplyModule } from 'src/supply/supply.module';
import { ModuleUser } from 'src/user/user.module';
import { ExitSupplyController } from './entry.controller';
import { ExitRepository } from './service/exit.repository';
import { ServiceExit } from './service/exit.service';
import { CreateExitSupplyUsecase } from './service/usecase/exit.create.usecase';
import { DeleteExitSupplyUsecase } from './service/usecase/exit.delete.usecase';
import { FindAllExitSupplyUsecase } from './service/usecase/exit.findAll.usecase';
import { FindByIdExitSupplyUsecase } from './service/usecase/exit.findById.usecase';
import { UpdateExitSupplyUsecase } from './service/usecase/exit.update.usecase';

@Module({
   imports: [
      DatabaseModule,
      ModuleUser,
      SupplyModule,
      PassportModule.register({ defaultStrategy: 'jwt' }),
   ],
   controllers: [ExitSupplyController],
   providers: [
      ServiceExit,
      CreateExitSupplyUsecase,
      FindAllExitSupplyUsecase,
      FindByIdExitSupplyUsecase,
      DeleteExitSupplyUsecase,
      UpdateExitSupplyUsecase,
      ExitRepository,
   ],
})
export class ExitSupplyModule {}
