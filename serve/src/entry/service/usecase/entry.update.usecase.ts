import { Injectable } from '@nestjs/common/decorators';
import { UpdateEntryDto } from 'src/entry/dto/update.entryDto';
import { ISupplyEntity } from 'src/supply/entities/supply.entity';
import { SupplyService } from 'src/supply/service/supply.service';
import { EntryRepository } from '../entry.repository';

@Injectable()
export class UpdateEntrySupplyUsecase {
   constructor(
      private readonly entryRepository: EntryRepository,
      private readonly serviceSupply: SupplyService,
   ) {}

   ConsoleLog(msg: string, log: any) {
      console.log();
      console.log(msg);
      console.log('-----------------------');
      console.log();
      console.log(log);
      console.log('-----------------------');
      console.log();
   }

   async execute(id: string, entry: UpdateEntryDto) {
      const entryUpdate = await this.entryRepository.findById(id);
      let verifyNewSupply: ISupplyEntity;

      if (entry.id_supply) {
         if (entry.id_supply !== entryUpdate.id_supply) {
            // Verificar se esse insumo existe
            verifyNewSupply = await this.serviceSupply.findById(
               entry.id_supply,
            );

            // Pegou a quantidade de estoque do insumo antigo e retirar a entrada
            const updateQuant =
               entryUpdate.supply.quant_estoque - entryUpdate.quant;

            // Atualizo o insumo antigo sem a entrada
            const oldSupply = await this.serviceSupply.update(
               entryUpdate.supply.id,
               {
                  quant_estoque: updateQuant,
               },
            );

            this.ConsoleLog('Insumo antigo', oldSupply);

            verifyNewSupply.quant_estoque += entryUpdate.quant;

            // ATULIZAR O INSUMO COM A NOVA QUANTIDADE DE ESTOQUE
            await this.serviceSupply.update(verifyNewSupply.id, {
               quant_estoque: verifyNewSupply.quant_estoque,
            });
         }

         return await this.entryRepository.update(id, entry);
      }
   }
}
