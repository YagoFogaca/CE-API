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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger/dist';
import { HandleExceptions } from 'src/utils/exceptions/exceptions';
import { CreateUserDto } from './dto/create.userDto';
import { UpdateUserDto } from './dto/update.userDto';
import { ServiceUser } from './service/user.service';

@ApiTags('Usuários')
@Controller('user')
export class ControllerUser {
   constructor(private readonly serviceUser: ServiceUser) {}

   @UseGuards(AuthGuard())
   @ApiBearerAuth()
   @Post('/create-user')
   async createUser(@Body() user: CreateUserDto) {
      try {
         return await this.serviceUser.create(user);
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }

   @UseGuards(AuthGuard())
   @ApiBearerAuth()
   @Get('/find-users')
   async findAll() {
      try {
         return await this.serviceUser.findAll();
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }

   @UseGuards(AuthGuard())
   @ApiBearerAuth()
   @Get('/find-user/:id')
   async findById(@Param('id') id: string) {
      try {
         return await this.serviceUser.findById(id);
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }

   @UseGuards(AuthGuard())
   @ApiBearerAuth()
   @Delete('/delete-user/:id')
   async delete(@Param('id') id: string) {
      try {
         return await this.serviceUser.delete(id);
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }

   @UseGuards(AuthGuard())
   @ApiBearerAuth()
   @Patch('/update-user/:id')
   async update(@Body() user: UpdateUserDto, @Param('id') id: string) {
      try {
         return await this.serviceUser.update(user, id);
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }
}
