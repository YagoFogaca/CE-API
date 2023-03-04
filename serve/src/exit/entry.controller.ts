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
import { CreateExitDto } from './dto/create.exit.dto';
import { UpdateExitDto } from './dto/update.exit.dto';
import { ServiceExit } from './service/exit.service';

@ApiTags('Saida de Insumos')
@Controller('/exit-supply')
export class ExitSupplyController {
   constructor(private readonly serviceExit: ServiceExit) {}

   @UseGuards(AuthGuard())
   @ApiBearerAuth()
   @Post('/create')
   async create(@Body() supply: CreateExitDto) {
      try {
         return await this.serviceExit.create(supply);
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
         return await this.serviceExit.findAll();
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
         return await this.serviceExit.findById(id);
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
         return await this.serviceExit.delete(id);
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }

   @UseGuards(AuthGuard())
   @ApiBearerAuth()
   @Patch('/update/:id')
   async update(@Param('id') id: string, @Body() entry: UpdateExitDto) {
      try {
         return await this.serviceExit.update(id, entry);
      } catch (err) {
         console.log(err);
         HandleExceptions(err);
      }
   }
}
