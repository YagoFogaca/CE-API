import { Injectable } from '@nestjs/common';
import { ExitRepository } from '../exit.repository';
import { SupplyService } from 'src/supply/service/supply.service';
import { ServiceUser } from 'src/user/service/user.service';
import { CreateExitDto } from '../../dto/create.exit.dto';
import { IExitEntity } from '../../entities/exit.entity';
import { ExitValidationEntity } from '../../entities/exit.validation.entity';

@Injectable()
export class CreateExitSupplyUsecase {
   constructor(
      private readonly exitRepository: ExitRepository,
      private readonly serviceUser: ServiceUser,
      private readonly serviceSupply: SupplyService,
   ) {}

   async execute(exitSupply: CreateExitDto): Promise<IExitEntity> {
      await this.serviceUser.findById(exitSupply.id_user);

      const supply = await this.serviceSupply.findById(exitSupply.id_supply);
      supply.quant_estoque -= exitSupply.quant;

      await this.serviceSupply.update(supply.id, {
         quant_estoque: supply.quant_estoque,
      });

      const exitValidationEntity = new ExitValidationEntity(exitSupply);
      const exitValidated = exitValidationEntity.returnExit();

      return await this.exitRepository.create(exitValidated);
   }
}
