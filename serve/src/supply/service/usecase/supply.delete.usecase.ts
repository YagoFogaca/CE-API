import { Injectable } from '@nestjs/common';
import { ISupplyEntity } from 'src/supply/entities/supply.entity';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptions.parms';
import { SupplyRepository } from '../supply.repository';

@Injectable()
export class DeleteSupplyUsecase {
   constructor(private readonly supplyRepository: SupplyRepository) {}

   async execute(id: string): Promise<ISupplyEntity> {
      try {
         return await this.supplyRepository.delete(id);
      } catch (err) {
         throw new Exception(
            Exceptions.NotFoundData,
            'Nenhum insumo com esse ID',
         );
      }
   }
}
