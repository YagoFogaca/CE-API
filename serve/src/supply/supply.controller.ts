import { Body, Controller, Post } from '@nestjs/common';
import { CreateSupplyDto } from './dto/create.supplyDto';
import { SupplyService } from './service/supply.service';

@Controller('/supplies')
export class SupplyController {
  constructor(private readonly supplyService: SupplyService) {}

  @Post('/create')
  async create(@Body() supply: CreateSupplyDto) {
    try {
      console.log(supply);
      return await this.supplyService.create(supply);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
