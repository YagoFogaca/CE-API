import { Injectable } from '@nestjs/common';
import { CreateSupplyDto } from '../dto/create.supplyDto';
import { ISupplyEntity } from '../entities/supply.entity';
import { CreateSupplyUsecase } from './usecase/supply.create.usecase';
import { FindAllSupplyUsecase } from './usecase/supply.findAll.usecase';
import { FindByIdSupplyUsecase } from './usecase/supply.findById.usecase';

@Injectable()
export class SupplyService {
   constructor(
      private readonly createSupplyUsecase: CreateSupplyUsecase,
      private readonly findAllSupplyUsecase: FindAllSupplyUsecase,
      private readonly findByIdSupplyUsecase: FindByIdSupplyUsecase,
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
}
