import { Injectable } from '@nestjs/common';
import { SupplyService } from 'src/supply/service/supply.service';
import { ExitRepository } from '../exit.repository';
import { IExitEntity } from '../../entities/exit.entity';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptions.parms';

@Injectable()
export class DeleteExitSupplyUsecase {
   constructor(
      private readonly exitRepository: ExitRepository,
      private readonly serviceSupply: SupplyService,
   ) {}

   async execute(id: string): Promise<IExitEntity> {
      try {
         const exitDeleted = await this.exitRepository.delete(id);
         const updateQuant =
            exitDeleted.supply.quant_estoque + exitDeleted.quant;
         await this.serviceSupply.update(exitDeleted.supply.id, {
            quant_estoque: updateQuant,
         });

         return exitDeleted;
      } catch (err) {
         throw new Exception(
            Exceptions.NotFoundData,
            'Nenhuma saida com esse id',
         );
      }
   }
}
