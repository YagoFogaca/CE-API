import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HandleExceptions } from 'src/utils/exceptions/exceptions';
import { CreateSupplyDto } from './dto/create.supplyDto';
import { SupplyService } from './service/supply.service';

@ApiTags('Insumos')
@Controller('/supplies')
export class SupplyController {
   constructor(private readonly supplyService: SupplyService) {}

   @Post('/create')
   async create(@Body() supply: CreateSupplyDto) {
      try {
         return await this.supplyService.create(supply);
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }

   @Get('/find-all')
   async findAll() {
      try {
         return await this.supplyService.findAll();
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }

   @Get('/find/:id')
   async findById(@Param('id') id: string) {
      try {
         return await this.supplyService.findById(id);
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }

   @Delete('/delete/:id')
   async delete(@Param('id') id: string) {
      try {
         return await this.supplyService.delete(id);
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }
}
