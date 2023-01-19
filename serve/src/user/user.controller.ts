import {
   Body,
   Controller,
   Delete,
   Get,
   Param,
   Patch,
   Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import { HandleExceptions } from 'src/utils/exceptions/exceptions';
import { CreateUserDto } from './dto/create.userDto';
import { UpdateUserDto } from './dto/update.userDto';
import { ServiceUser } from './service/user.service';

@ApiTags('Usuários')
@Controller('user')
export class ControllerUser {
   constructor(private readonly serviceUser: ServiceUser) {}

   @Post('/create-user')
   async createUser(@Body() user: CreateUserDto) {
      try {
         return await this.serviceUser.create(user);
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }

   @Delete('/delete-user/:id')
   async delete(@Param('id') id: string) {
      try {
         return await this.serviceUser.delete(id);
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }

   @Get('/find-users')
   async findAll() {
      try {
         return await this.serviceUser.findAll();
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }

   @Get('/find-user/:id')
   async findById(@Param('id') id: string) {
      try {
         return await this.serviceUser.findById(id);
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }

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
