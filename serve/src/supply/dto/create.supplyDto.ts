export class CreateSupplyDto {
  nome: string;
  quant_estoque: number;
  unidade: string;
  ativo: boolean;
  id_user: string;
}

const teste: CreateSupplyDto = {
  nome: '',
  quant_estoque: 0,
  unidade: '',
  ativo: false,
  id_user: '',
};
