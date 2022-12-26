import { Injectable } from '@nestjs/common';
import { CreateSupplyDto } from 'src/supply/dto/create.supplyDto';
import { ISupplyEntity } from 'src/supply/entities/supply.entity';
import { SupplyRepository } from '../supply.repository';

@Injectable()
export class CreateSupplyUsecase {
  constructor(private readonly supplyRepository: SupplyRepository) {}

  async execute(supply: CreateSupplyDto): Promise<ISupplyEntity> {
    return await this.supplyRepository.create(supply, 'knl');
  }
}
