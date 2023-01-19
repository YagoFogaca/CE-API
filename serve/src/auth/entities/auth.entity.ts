import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class IAuth {
   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   nome_usuario: string;

   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   senha: string;
}
