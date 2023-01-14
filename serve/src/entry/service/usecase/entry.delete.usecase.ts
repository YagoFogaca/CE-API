import { Injectable } from '@nestjs/common';
import { IEntryEntity } from 'src/entry/entities/entry.entity';
import { SupplyService } from 'src/supply/service/supply.service';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptions.parms';
import { EntryRepository } from '../entry.repository';

@Injectable()
export class DeleteEntrySupplyUsecase {
   constructor(
      private readonly entryRepository: EntryRepository,
      private readonly serviceSupply: SupplyService,
   ) {}

   async execute(id: string): Promise<IEntryEntity> {
      try {
         const entryDeleted = await this.entryRepository.delete(id);
         const updateQuant =
            entryDeleted.supply.quant_estoque - entryDeleted.quant;
         await this.serviceSupply.update(entryDeleted.supply.id, {
            quant_estoque: updateQuant,
         });

         return entryDeleted;
      } catch (err) {
         throw new Exception(
            Exceptions.NotFoundData,
            'Nenhuma entrada com esse ID',
         );
      }
   }
}
