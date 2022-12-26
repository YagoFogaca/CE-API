import { Injectable } from '@nestjs/common';
import { CreateSupplyDto } from '../dto/create.supplyDto';
import { SupplyRepository } from './supply.repository';

@Injectable()
export class SupplyService {
  constructor(private readonly supplyRepository: SupplyRepository) {}

  async create(supply: CreateSupplyDto) {
    return await this.supplyRepository.create(supply, 'N512555117');
  }
}
