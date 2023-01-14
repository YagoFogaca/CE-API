import { PartialType } from '@nestjs/swagger';
import { CreateEntryDto } from './create.entryDto';

export class UpdateEntryDto extends PartialType(CreateEntryDto) {}
