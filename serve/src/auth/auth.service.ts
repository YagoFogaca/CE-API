import { UserRepository } from 'src/user/service/user.repository';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptions.parms';
import { IAuth } from './entities/auth.entity';
import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
   constructor(
      private readonly userRepository: UserRepository,
      private readonly jwtService: JwtService,
   ) {}

   async login({ nome_usuario, senha }: IAuth) {
      const user = await this.userRepository.findByUserName(nome_usuario);
      if (!user) {
         throw new Exception(
            Exceptions.InvalidData,
            'Nenhum usuario encontrado',
         );
      }

      const comparePassword = bcrypt.compareSync(senha, user.senha);
      if (!comparePassword) {
         throw new Exception(Exceptions.InvalidData, 'Senha invalida');
      }

      delete user.senha;

      return {
         user: user,
         token: this.jwtService.sign(user),
      };
   }

   async getUser(nome_usuario: string): Promise<IAuth> {
      return await this.userRepository.findByUserName(nome_usuario);
   }
}
