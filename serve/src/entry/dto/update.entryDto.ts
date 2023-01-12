import { PartialType } from '@nestjs/swagger';
import { CreateSupplyDto } from 'src/supply/dto/create.supplyDto';

export class UpdateEntryDto extends PartialType(CreateSupplyDto) {}
