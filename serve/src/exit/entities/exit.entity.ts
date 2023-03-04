import { ISupplyEntity } from 'src/supply/entities/supply.entity';

export interface IExitEntity {
   id: string;
   id_user: string;
   id_supply: string;
   quant: number;
   data: Date;
   supply?: ISupplyEntity;
}
