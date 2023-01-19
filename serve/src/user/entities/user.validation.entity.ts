import { Role } from '../../utils/enums/role.enum';
import { randomUUID } from 'crypto';
// import bcrypt from 'bcrypt';
import * as bcrypt from 'bcrypt';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptions.parms';
import { CreateUserDto } from '../dto/create.userDto';

export class UserValidationEntity {
   nome: string;
   nome_usuario: string;
   senha: string;
   role: string;

   constructor(user: CreateUserDto) {
      this.nome = user.nome;
      this.nome_usuario = user.nome_usuario;
      this.senha = user.senha;
      this.role = user.role;
   }

   validateUserName() {
      if (this.nome_usuario.length < 3) {
         throw new Exception(
            Exceptions.InvalidData,
            'O nome de usário não pode ser menor que 3 caracteres',
         );
      }
   }

   validateNameUser() {
      if (this.nome.length <= 2) {
         throw new Exception(
            Exceptions.InvalidData,
            'O nome do usário não pode ser menor que 3 caracteres',
         );
      }
   }

   async validatePassword() {
      if (this.senha.length <= 6) {
         throw new Exception(
            Exceptions.InvalidData,
            'A senha não pode ser menor que 7 caracteres',
         );
      } else {
         const passwordBcrypt = await bcrypt.hash(this.senha, 10);
         console.log(passwordBcrypt);
         this.senha = passwordBcrypt;
      }
   }

   validateRole() {
      if (this.role !== Role.ADMIN && this.role !== Role.USER) {
         throw new Exception(
            Exceptions.InvalidData,
            'A permissão do usuario está incorreta',
         );
      }
   }

   async returnUser() {
      this.validateNameUser();
      this.validateUserName();
      await this.validatePassword();
      this.validateRole();

      return {
         id: randomUUID(),
         nome: this.nome,
         nome_usuario: this.nome_usuario,
         senha: this.senha,
         role: this.role,
      };
   }
}
