import { Injectable } from '@nestjs/common';
import { CreateSupplyDto } from '../dto/create.supplyDto';
import { UpdateSupplyDto } from '../dto/update.supplyDto';
import { ISupplyEntity } from '../entities/supply.entity';
import { CreateSupplyUsecase } from './usecase/supply.create.usecase';
import { DeleteSupplyUsecase } from './usecase/supply.delete.usecase';
import { FindAllSupplyUsecase } from './usecase/supply.findAll.usecase';
import { FindByIdSupplyUsecase } from './usecase/supply.findById.usecase';
import { UpdateSupplyUsecase } from './usecase/supply.update.usecase';

@Injectable()
export class SupplyService {
   constructor(
      private readonly createSupplyUsecase: CreateSupplyUsecase,
      private readonly findAllSupplyUsecase: FindAllSupplyUsecase,
      private readonly findByIdSupplyUsecase: FindByIdSupplyUsecase,
      private readonly deleteSupplyUsecase: DeleteSupplyUsecase,
      private readonly updateSupplyUsecase: UpdateSupplyUsecase,
   ) {}

   async create(supply: CreateSupplyDto) {
      return await this.createSupplyUsecase.execute(supply);
   }

   async findAll(): Promise<ISupplyEntity[]> {
      return await this.findAllSupplyUsecase.execute();
   }

   async findById(id: string): Promise<ISupplyEntity> {
      return await this.findByIdSupplyUsecase.execute(id);
   }

   async delete(id: string): Promise<string> {
      await this.deleteSupplyUsecase.execute(id);
      return 'Insumo deletado com sucesso';
   }

   async update(id: string, supply: UpdateSupplyDto): Promise<string> {
      await this.updateSupplyUsecase.execute(id, supply);
      return 'Insumo atualizado com sucesso';
   }
}
