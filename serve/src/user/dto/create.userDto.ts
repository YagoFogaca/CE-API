import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nome_usuario: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  senha: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  role: string;
}
