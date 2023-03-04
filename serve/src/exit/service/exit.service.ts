import { Injectable } from '@nestjs/common';
import { CreateExitDto } from '../dto/create.exit.dto';
import { UpdateExitDto } from '../dto/update.exit.dto';
import { IExitEntity } from '../entities/exit.entity';
import { CreateExitSupplyUsecase } from './usecase/exit.create.usecase';
import { DeleteExitSupplyUsecase } from './usecase/exit.delete.usecase';
import { FindAllExitSupplyUsecase } from './usecase/exit.findAll.usecase';
import { FindByIdExitSupplyUsecase } from './usecase/exit.findById.usecase';
import { UpdateExitSupplyUsecase } from './usecase/exit.update.usecase';

@Injectable()
export class ServiceExit {
   constructor(
      private readonly createExitSupplyUsecase: CreateExitSupplyUsecase,
      private readonly findAllExitSupplyUsecase: FindAllExitSupplyUsecase,
      private readonly findByIdExitSupplyUsecase: FindByIdExitSupplyUsecase,
      private readonly deleteExitSupplyUsecase: DeleteExitSupplyUsecase,
      private readonly updateExitSupplyUsecase: UpdateExitSupplyUsecase,
   ) {}

   async create(exitSuply: CreateExitDto): Promise<IExitEntity> {
      return await this.createExitSupplyUsecase.execute(exitSuply);
   }

   async findAll(): Promise<IExitEntity[]> {
      return await this.findAllExitSupplyUsecase.execute();
   }

   async findById(id: string): Promise<IExitEntity> {
      return await this.findByIdExitSupplyUsecase.execute(id);
   }

   async delete(id: string): Promise<string> {
      await this.deleteExitSupplyUsecase.execute(id);
      return 'Saida deletada com sucesso';
   }

   async update(id: string, entrySuply: UpdateExitDto) {
      return await this.updateExitSupplyUsecase.execute(id, entrySuply);
   }
}
