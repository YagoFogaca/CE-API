import { Injectable } from '@nestjs/common';
import { IExitEntity } from '../../entities/exit.entity';
import { ExitRepository } from '../exit.repository';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptions.parms';

@Injectable()
export class FindByIdExitSupplyUsecase {
   constructor(private readonly exitRepository: ExitRepository) {}

   async execute(id: string): Promise<IExitEntity> {
      const exitSuply = await this.exitRepository.findById(id);
      if (!exitSuply) {
         throw new Exception(
            Exceptions.NotFoundData,
            'Nenhuma saida com esse id',
         );
      }

      return exitSuply;
   }
}
