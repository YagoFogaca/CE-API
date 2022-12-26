import { Injectable } from '@nestjs/common';
import { ISupplyEntity } from 'src/supply/entities/supply.entity';
import { SupplyRepository } from '../supply.repository';

@Injectable()
export class FindAllSupplyUsecase {
  constructor(private readonly supplyRepository: SupplyRepository) {}

  async execute(): Promise<ISupplyEntity[]> {
    return await this.supplyRepository.findAll();
  }
}
