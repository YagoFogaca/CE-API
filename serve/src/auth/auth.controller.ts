import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { HandleExceptions } from 'src/utils/exceptions/exceptions';
import { AuthService } from './auth.service';
import { IAuth } from './entities/auth.entity';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
   constructor(private readonly authService: AuthService) {}

   @Post('/login')
   async login(@Body() user: IAuth) {
      try {
         return await this.authService.login(user);
      } catch (err) {
         console.log(err.message);
         HandleExceptions(err);
      }
   }
}
