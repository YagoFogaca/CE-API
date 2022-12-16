import { UpdateUserDto } from '../dto/update.userDto';
import { Role } from '../../utils/enums/role.enum';
import { randomUUID } from 'crypto';

export class UserValidationEntity {
  id: string;
  nome: string;
  nome_usuario: string;
  senha: string;
  role: string;

  constructor(user: UpdateUserDto) {
    this.id = user.id ?? randomUUID();
    this.nome = user.nome;
    this.nome_usuario = user.nome_usuario;
    this.senha = user.senha;
    this.role = user.role;
  }

  validateUserName() {
    if (this.nome_usuario.length < 3) {
      throw new Error('O nome de usário não pode ser menor que 3 caracteres');
    }
  }

  validateNameUser() {
    if (this.nome_usuario.length <= 2) {
      throw new Error('O nome do usário não pode ser menor que 3 caracteres');
    }
  }

  validatePassword() {
    if (this.senha.length <= 6) {
      throw new Error('A senha não pode ser menor que 7 caracteres');
    }
  }

  validateRole() {
    if (this.role !== Role.ADMIN && this.role !== Role.USER) {
      throw new Error('A permissão do usuario está incorreta');
    }
  }

  returnUser() {
    this.validateNameUser();
    this.validateUserName();
    this.validatePassword();
    this.validateRole();

    return {
      id: this.id,
      nome: this.nome,
      nome_usuario: this.nome_usuario,
      senha: this.senha,
      role: this.role,
    };
  }
}
