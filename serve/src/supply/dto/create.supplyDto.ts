import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSupplyDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  quant_estoque: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  unidade: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  ativo: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id_user: string;
}
