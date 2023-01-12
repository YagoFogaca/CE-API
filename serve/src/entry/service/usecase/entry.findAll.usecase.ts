import { Injectable } from '@nestjs/common';
import { IEntryEntity } from 'src/entry/entities/entry.entity';
import { EntryRepository } from '../entry.repository';

@Injectable()
export class FindAllEntrySupplyUsecase {
   constructor(private readonly entryRepository: EntryRepository) {}

   async execute(): Promise<IEntryEntity[]> {
      return await this.entryRepository.findAll();
   }
}
