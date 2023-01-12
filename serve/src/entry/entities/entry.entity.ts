import { CreateEntryDto } from '../dto/create.entryDto';

export interface IEntryEntity extends CreateEntryDto {
   id: string;
}
