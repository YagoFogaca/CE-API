import { Injectable } from '@nestjs/common';
import { IExitEntity } from '../../entities/exit.entity';
import { ExitRepository } from '../exit.repository';

@Injectable()
export class FindAllExitSupplyUsecase {
   constructor(private readonly exitRepository: ExitRepository) {}

   async execute(): Promise<IExitEntity[]> {
      return await this.exitRepository.findAll();
   }
}
