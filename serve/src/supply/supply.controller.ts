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
import { CreateSupplyDto } from './dto/create.supplyDto';
import { UpdateSupplyDto } from './dto/update.supplyDto';
import { SupplyService } from './service/supply.service';

@ApiTags('Insumos')
@Controller('/supplies')
export class SupplyController {
   constructor(private readonly supplyService: SupplyService) {}

   @UseGuards(AuthGuard())
   @ApiBearerAuth()
   @Post('/create')
   async create(@Body() supply: CreateSupplyDto) {
      try {
         return await this.supplyService.create(supply);
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
         return await this.supplyService.findAll();
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
         return await this.supplyService.findById(id);
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
         return await this.supplyService.delete(id);
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }

   @UseGuards(AuthGuard())
   @ApiBearerAuth()
   @Patch('/update/:id')
   async update(@Param('id') id: string, @Body() supply: UpdateSupplyDto) {
      try {
         console.log(supply);
         return await this.supplyService.update(id, supply);
      } catch (err) {
         console.log(err);
         HandleExceptions(err);
      }
   }
}
