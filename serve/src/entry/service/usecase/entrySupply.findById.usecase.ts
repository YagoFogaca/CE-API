import { Injectable } from '@nestjs/common';
import { IEntryEntity } from 'src/entry/entities/entry.entity';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptions.parms';
import { EntryRepository } from '../entry.repository';

@Injectable()
export class FindAllEntrySupplyUsecase {
   constructor(private readonly entryRepository: EntryRepository) {}

   async execute(id: string): Promise<IEntryEntity> {
      const entrySuply = await this.entryRepository.findById(id);
      if (!entrySuply) {
         throw new Exception(
            Exceptions.NotFoundData,
            'Nenhuma entrada com esse insumo',
         );
      }

      return entrySuply;
   }
}
