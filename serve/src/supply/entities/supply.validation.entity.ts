import { randomUUID } from 'crypto';
import { Unidade } from 'src/utils/enums/unidade.enum';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptions.parms';
import { CreateSupplyDto } from '../dto/create.supplyDto';

export class SupplyValidationEntity {
    nome: string;
    quant_estoque: number;
    unidade: string;
    ativo: boolean;
    id_user: string;

    constructor(supply: CreateSupplyDto) {
        this.nome = supply.nome;
        this.quant_estoque = supply.quant_estoque;
        this.unidade = supply.unidade;
        this.id_user = supply.id_user;
        this.ativo = supply.ativo;
    }

    validateName() {
        if (this.nome.length <= 3) {
            throw new Exception(
                Exceptions.InvalidData,
                'O nome do insumo não pode ser menor ou igual a 3 caracteres',
            );
        }
    }

    validateUnity() {
        if (
            this.unidade !== Unidade.CX &&
            this.unidade !== Unidade.LT &&
            this.unidade !== Unidade.M &&
            this.unidade !== Unidade.PC
        ) {
            throw new Exception(
                Exceptions.InvalidData,
                'O tipo de unidade do insumo não existe no sistema',
            );
        }
    }

    validateQuantityStock() {
        if (this.quant_estoque < 0) {
            throw new Exception(
                Exceptions.InvalidData,
                'O insumo não pode ter uma quantidade de estoque negativa',
            );
        }
    }

    returnSupply() {
        this.validateName();
        this.validateQuantityStock();
        this.validateUnity();

        return {
            id: randomUUID(),
            nome: this.nome,
            quant_estoque: this.quant_estoque,
            unidade: this.unidade,
            ativo: this.ativo,
            id_user: this.id_user,
        };
    }
}
