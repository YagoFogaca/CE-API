import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

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
   @IsDateString()
   data?: Date;
}
