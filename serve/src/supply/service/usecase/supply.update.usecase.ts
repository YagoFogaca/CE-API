import { UpdateSupplyDto } from 'src/supply/dto/update.supplyDto';
import { SupplyRepository } from '../supply.repository';

export class UpdateSupplyUsecase {
   constructor(supplyRepository: SupplyRepository) {}

   async execute(id: string, supply: UpdateSupplyDto) {}
}
