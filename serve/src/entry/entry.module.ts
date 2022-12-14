import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/prisma/database.module';
import { SupplyModule } from 'src/supply/supply.module';
import { ModuleUser } from 'src/user/user.module';
import { EntrySupplyController } from './entry.controller';
import { EntryRepository } from './service/entry.repository';
import { ServiceEntry } from './service/entry.service';
import { CreateEntrySupplyUsecase } from './service/usecase/entry.create.usecase';
import { DeleteEntrySupplyUsecase } from './service/usecase/entry.delete.usecase';
import { FindAllEntrySupplyUsecase } from './service/usecase/entry.findAll.usecase';
import { FindByIdEntrySupplyUsecase } from './service/usecase/entry.findById.usecase';

@Module({
   imports: [DatabaseModule, ModuleUser, SupplyModule],
   controllers: [EntrySupplyController],
   providers: [
      ServiceEntry,
      CreateEntrySupplyUsecase,
      FindAllEntrySupplyUsecase,
      FindByIdEntrySupplyUsecase,
      DeleteEntrySupplyUsecase,
      EntryRepository,
   ],
})
export class EntrySupplyModule {}
