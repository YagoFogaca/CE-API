import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
   constructor(private readonly authService: AuthService) {
      super({
         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
         ignoreExpiration: false,
         secretOrKey: process.env.SECRET_KEY,
      });
   }

   async validate(user: any) {
      const userValidate = await this.authService.getUser(user.nome_usuario);
      return userValidate;
   }
}
