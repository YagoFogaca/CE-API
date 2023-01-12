import { Injectable } from '@nestjs/common';
import { CreateEntryDto } from 'src/entry/dto/create.entryDto';
import { IEntryEntity } from 'src/entry/entities/entry.entity';
import { EntryValidationEntity } from 'src/entry/entities/entry.validation.entity';
import { SupplyService } from 'src/supply/service/supply.service';
import { ServiceUser } from 'src/user/service/user.service';
import { EntryRepository } from '../entry.repository';

@Injectable()
export class CreateEntrySupplyUsecase {
   constructor(
      private readonly entryRepository: EntryRepository,
      private readonly serviceUser: ServiceUser,
      private readonly serviceSupply: SupplyService,
   ) {}

   async execute(entrySupply: CreateEntryDto): Promise<IEntryEntity> {
      console.log(entrySupply);
      await this.serviceUser.findById(entrySupply.id_user);

      const supply = await this.serviceSupply.findById(entrySupply.id_supply);
      supply.quant_estoque += entrySupply.quant;

      await this.serviceSupply.update(supply.id, {
         quant_estoque: supply.quant_estoque,
      });

      const entryValidationEntity = new EntryValidationEntity(entrySupply);

      return await this.entryRepository.create(
         entryValidationEntity.returnEntry(),
      );
   }
}
