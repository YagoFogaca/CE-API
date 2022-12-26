import { Injectable } from '@nestjs/common';
import { CreateSupplyDto } from '../dto/create.supplyDto';
import { CreateSupplyUsecase } from './usecase/supply.create.usecase';

@Injectable()
export class SupplyService {
    constructor(private readonly createSupplyUsecase: CreateSupplyUsecase) {}

    async create(supply: CreateSupplyDto) {
        return await this.createSupplyUsecase.execute(supply);
    }
}
