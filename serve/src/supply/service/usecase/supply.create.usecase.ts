import { Injectable } from '@nestjs/common';
import { CreateSupplyDto } from 'src/supply/dto/create.supplyDto';
import { ISupplyEntity } from 'src/supply/entities/supply.entity';
import { SupplyValidationEntity } from 'src/supply/entities/supply.validation.entity';
import { ServiceUser } from 'src/user/service/user.service';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptions.parms';
import { SupplyRepository } from '../supply.repository';

// ** PENSAR MELHOR NA ENTIDADE DE INSUMOS, DEIXAR OP OU NÃO **
@Injectable()
export class CreateSupplyUsecase {
    constructor(
        private readonly supplyRepository: SupplyRepository,
        private readonly serviceUser: ServiceUser,
    ) {}

    async execute(supply: CreateSupplyDto): Promise<ISupplyEntity> {
        await this.serviceUser.findById(supply.id_user);

        const verifyName = await this.supplyRepository.findByName(supply.nome);
        if (verifyName) {
            throw new Exception(
                Exceptions.InvalidData,
                'O insumo com esse nome já foi cadastrado no sistema',
            );
        }

        const supplyEntity = new SupplyValidationEntity(supply);
        return await this.supplyRepository.create(supplyEntity.returnSupply());
    }
}
