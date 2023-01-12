import { Injectable } from '@nestjs/common';
import { CreateEntryDto } from '../dto/create.entryDto';
import { UpdateEntryDto } from '../dto/update.entryDto';
import { IEntryEntity } from '../entities/entry.entity';
import { CreateEntrySupplyUsecase } from './usecase/entry.create.usecase';
import { DeleteEntrySupplyUsecase } from './usecase/entry.delete.usecase';
import { FindAllEntrySupplyUsecase } from './usecase/entry.findAll.usecase';
import { FindByIdEntrySupplyUsecase } from './usecase/entry.findById.usecase';

@Injectable()
export class ServiceEntry {
   constructor(
      private readonly createEntrySupplyUsecase: CreateEntrySupplyUsecase,
      private readonly findAllEntrySupplyUsecase: FindAllEntrySupplyUsecase,
      private readonly findByIdEntrySupplyUsecase: FindByIdEntrySupplyUsecase,
      private readonly deleteEntrySupplyUsecase: DeleteEntrySupplyUsecase,
   ) {}

   async create(entrySuply: CreateEntryDto): Promise<IEntryEntity> {
      return await this.createEntrySupplyUsecase.execute(entrySuply);
   }

   async findAll(): Promise<IEntryEntity[]> {
      return await this.findAllEntrySupplyUsecase.execute();
   }

   async findById(id: string): Promise<IEntryEntity> {
      return await this.findByIdEntrySupplyUsecase.execute(id);
   }

   async delete(id: string): Promise<string> {
      await this.deleteEntrySupplyUsecase.execute(id);
      return 'Entrada deletada com sucesso';
   }

   async update(id: string, entrySuply: UpdateEntryDto) {}
}
