import { Injectable } from '@nestjs/common/decorators';
import { UpdateEntryDto } from 'src/entry/dto/update.entryDto';
import { ISupplyEntity } from 'src/supply/entities/supply.entity';
import { SupplyService } from 'src/supply/service/supply.service';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptions.parms';
import { EntryRepository } from '../entry.repository';

@Injectable()
export class UpdateEntrySupplyUsecase {
   constructor(
      private readonly entryRepository: EntryRepository,
      private readonly serviceSupply: SupplyService,
   ) {}

   async execute(id: string, entry: UpdateEntryDto) {
      const entryUpdate = await this.entryRepository.findById(id);
      let supply: ISupplyEntity = entryUpdate.supply;

      if (entry.id_supply) {
         if (entry.id_supply !== entryUpdate.id_supply) {
            supply = await this.serviceSupply.findById(entry.id_supply);

            if (entryUpdate.supply.quant_estoque >= entryUpdate.quant) {
               entryUpdate.supply.quant_estoque -= entryUpdate.quant;
            } else {
               entryUpdate.supply.quant_estoque = 0;
            }

            await this.serviceSupply.update(entryUpdate.supply.id, {
               quant_estoque: entryUpdate.supply.quant_estoque,
            });
         }
      }

      if (entry.quant) {
         if (entry.quant !== entryUpdate.quant) {
            if (entry.quant > entryUpdate.quant) {
               entryUpdate.quant = entry.quant - entryUpdate.quant;
               supply.quant_estoque += entryUpdate.quant;
            } else if (entry.quant < entryUpdate.quant) {
               entryUpdate.quant = entryUpdate.quant - entry.quant;
               supply.quant_estoque -= entryUpdate.quant;
            }
         }
      } else if (entry.quant <= 0) {
         throw new Exception(
            Exceptions.InvalidData,
            'A entrada de insumo não pode ser menor ou igual a zero',
         );
      } else {
         supply.quant_estoque += entryUpdate.quant;
      }

      await this.serviceSupply.update(supply.id, {
         quant_estoque: supply.quant_estoque,
      });

      return await this.entryRepository.update(id, entry);
   }
}
