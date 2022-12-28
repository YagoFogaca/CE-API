import { PartialType } from '@nestjs/swagger';
import { CreateSupplyDto } from './create.supplyDto';

export class UpdateSupplyDto extends PartialType(CreateSupplyDto) {}
