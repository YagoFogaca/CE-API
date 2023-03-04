import { Injectable } from '@nestjs/common/decorators';
import { SupplyService } from 'src/supply/service/supply.service';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptions.parms';
import { ExitRepository } from '../exit.repository';

import { UpdateExitDto } from '../../dto/update.exit.dto';
import { ISupplyEntity } from 'src/supply/entities/supply.entity';

@Injectable()
export class UpdateExitSupplyUsecase {
   constructor(
      private readonly exitRepository: ExitRepository,
      private readonly serviceSupply: SupplyService,
   ) {}

   async execute(id: string, exit: UpdateExitDto) {
      const exitUpdate = await this.exitRepository.findById(id);
      let supply: ISupplyEntity = exitUpdate.supply;

      if (exit.id_supply) {
         if (exit.id_supply !== exitUpdate.id_supply) {
            supply = await this.serviceSupply.findById(exit.id_supply);

            if (exitUpdate.supply.quant_estoque >= exitUpdate.quant) {
               exitUpdate.supply.quant_estoque += exitUpdate.quant;
            } else {
               exitUpdate.supply.quant_estoque = 0;
            }

            await this.serviceSupply.update(exitUpdate.supply.id, {
               quant_estoque: exitUpdate.supply.quant_estoque,
            });
         }
      }

      //   if (exit.quant) {
      //      if (exit.quant !== exitUpdate.quant) {
      //         if (exit.quant > exitUpdate.quant) {
      //            exitUpdate.quant = exit.quant - exitUpdate.quant;
      //            supply.quant_estoque += exitUpdate.quant;
      //         } else if (exit.quant < exitUpdate.quant) {
      //            exitUpdate.quant = exitUpdate.quant - exit.quant;
      //            supply.quant_estoque -= exitUpdate.quant;
      //         }
      //      }
      //   } else if (exit.quant <= 0) {
      //      throw new Exception(
      //         Exceptions.InvalidData,
      //         'A entrada de insumo não pode ser menor ou igual a zero',
      //      );
      //   } else {
      //      supply.quant_estoque += exitUpdate.quant;
      //   }

      await this.serviceSupply.update(supply.id, {
         quant_estoque: supply.quant_estoque,
      });

      return await this.exitRepository.update(id, exit);
   }
}
