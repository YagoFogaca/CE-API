import { ISupplyEntity } from 'src/supply/entities/supply.entity';
import { CreateEntryDto } from '../dto/create.entryDto';

export interface IEntryEntity extends CreateEntryDto {
   id: string;
   supply: ISupplyEntity;
}
