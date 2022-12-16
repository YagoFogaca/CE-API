import { IEntryEntity } from 'src/entry/entities/entry.entity';
import { IExitEntity } from 'src/exit/entities/exit.entity';
import { IUserEntity } from 'src/user/entities/user.entity';
import { CreateSupplyDto } from '../dto/create.supplyDto';

export interface ISupplyEntity extends CreateSupplyDto {
  id: string;
  user: IUserEntity;
  exit: IExitEntity[];
  entry: IEntryEntity[];
}
