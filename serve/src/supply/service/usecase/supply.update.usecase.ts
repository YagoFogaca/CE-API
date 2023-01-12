import { Injectable } from '@nestjs/common/decorators';
import { UpdateSupplyDto } from 'src/supply/dto/update.supplyDto';
import { ISupplyEntity } from 'src/supply/entities/supply.entity';
import { Unidade } from 'src/utils/enums/unidade.enum';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptions.parms';
import { SupplyRepository } from '../supply.repository';

@Injectable()
export class UpdateSupplyUsecase {
   constructor(private readonly supplyRepository: SupplyRepository) {}

   async execute(id: string, supply: UpdateSupplyDto): Promise<ISupplyEntity> {
      if (supply.nome) {
         const verifyName = await this.supplyRepository.findByName(supply.nome);
         if (verifyName) {
            throw new Exception(
               Exceptions.InvalidData,
               'Um insumo com esse nome já foi cadastrado no sistema',
            );
         }
      }

      if (supply.quant_estoque) {
         if (supply.quant_estoque < 0) {
            throw new Exception(
               Exceptions.InvalidData,
               'Um insumo não pode ter quantidade em estoque menor que zero',
            );
         }
      }

      if (supply.unidade) {
         if (
            supply.unidade !== Unidade.CX &&
            supply.unidade !== Unidade.LT &&
            supply.unidade !== Unidade.M &&
            supply.unidade !== Unidade.PC
         ) {
            throw new Exception(
               Exceptions.InvalidData,
               'O tipo de unidade do insumo não existe no sistema',
            );
         }
      }

      try {
         return await this.supplyRepository.update(id, supply);
      } catch (err) {
         throw new Exception(
            Exceptions.NotFoundData,
            'Insumo não encontrado com esse ID',
         );
      }
   }
}
