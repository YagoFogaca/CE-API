import {
   Body,
   Controller,
   Delete,
   Get,
   Param,
   Patch,
   Post,
   UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { HandleExceptions } from 'src/utils/exceptions/exceptions';
import { CreateEntryDto } from './dto/create.entryDto';
import { UpdateEntryDto } from './dto/update.entryDto';
import { ServiceEntry } from './service/entry.service';

@ApiTags('Entrada de Insumos')
@Controller('/entry-supply')
export class EntrySupplyController {
   constructor(private readonly serviceEntry: ServiceEntry) {}

   @UseGuards(AuthGuard())
   @ApiBearerAuth()
   @Post('/create')
   async create(@Body() supply: CreateEntryDto) {
      try {
         return await this.serviceEntry.create(supply);
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }

   @UseGuards(AuthGuard())
   @ApiBearerAuth()
   @Get('/find-all')
   async findAll() {
      try {
         return await this.serviceEntry.findAll();
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }

   @UseGuards(AuthGuard())
   @ApiBearerAuth()
   @Get('/find/:id')
   async findById(@Param('id') id: string) {
      try {
         return await this.serviceEntry.findById(id);
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }

   @UseGuards(AuthGuard())
   @ApiBearerAuth()
   @Delete('/delete/:id')
   async delete(@Param('id') id: string) {
      try {
         return await this.serviceEntry.delete(id);
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }

   @UseGuards(AuthGuard())
   @ApiBearerAuth()
   @Patch('/update/:id')
   async update(@Param('id') id: string, @Body() entry: UpdateEntryDto) {
      try {
         return await this.serviceEntry.update(id, entry);
      } catch (err) {
         console.log(err);
         HandleExceptions(err);
      }
   }
}
