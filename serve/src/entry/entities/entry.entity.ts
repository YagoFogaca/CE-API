import { ISupplyEntity } from 'src/supply/entities/supply.entity';
import { IUserEntity } from 'src/user/entities/user.entity';

export interface IEntryEntity {
  id: string;
  id_user: string;
  id_supply: string;
  quant: number;
  data: Date;
}
