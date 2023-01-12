import {
   Body,
   Controller,
   Delete,
   Get,
   Param,
   Patch,
   Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HandleExceptions } from 'src/utils/exceptions/exceptions';
import { CreateEntryDto } from './dto/create.entryDto';
import { ServiceEntry } from './service/entry.service';

@ApiTags('Entrada de Insumos')
@Controller('/entry-supply')
export class EntrySupplyController {
   constructor(private readonly serviceEntry: ServiceEntry) {}

   @Post('/create')
   async create(@Body() supply: CreateEntryDto) {
      try {
         return await this.serviceEntry.create(supply);
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }

   @Get('/find-all')
   async findAll() {
      try {
         return await this.serviceEntry.findAll();
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }

   @Get('/find/:id')
   async findById(@Param('id') id: string) {
      try {
         return await this.serviceEntry.findById(id);
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }

   @Delete('/delete/:id')
   async delete(@Param('id') id: string) {
      try {
         return await this.serviceEntry.delete(id);
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }

   //    @Patch('/update/:id')
   //    async update(@Param('id') id: string, @Body() supply: UpdateSupplyDto) {
   //       try {
   //          console.log(supply);
   //          return await this.supplyService.update(id, supply);
   //       } catch (err) {
   //          console.log(err);
   //          HandleExceptions(err);
   //       }
   //    }
}
