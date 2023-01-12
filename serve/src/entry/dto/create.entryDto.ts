import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEntryDto {
   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   id_user: string;

   @ApiProperty()
   @IsNotEmpty()
   @IsString()
   id_supply: string;

   @ApiProperty()
   @IsNotEmpty()
   @IsNumber()
   quant: number;

   @ApiProperty()
   @IsNotEmpty()
   data: Date;
}
