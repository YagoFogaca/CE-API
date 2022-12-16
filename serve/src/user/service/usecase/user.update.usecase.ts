import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from 'src/user/dto/update.userDto';
import { IUserEntity } from 'src/user/entities/user.entity';
import { Role } from 'src/utils/enums/role.enum';
import { UserRepository } from '../user.repository';

@Injectable()
export class UpdateUserUsecase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(user: UpdateUserDto): Promise<IUserEntity> {
    if (user.nome_usuario) {
      const verifyUsername = await this.userRepository.findByUserName(
        user.nome_usuario,
      );
      if (verifyUsername.id !== user.id) {
        throw new Error('O nome de usuário já existe');
      }

      if (user.nome_usuario.length < 3) {
        throw new Error('O nome de usário não pode ser menor que 3 caracteres');
      }
    }

    if (user.nome) {
      if (user.nome.length <= 2) {
        throw new Error('O nome do usário não pode ser menor que 3 caracteres');
      }
    }

    if (user.role) {
      if (user.role !== Role.ADMIN && user.role !== Role.USER) {
        throw new Error('A permissão do usuario está incorreta');
      }
    }

    if (user.senha) {
      delete user.senha;
    }

    const userUpdated = await this.userRepository.update(user);
    if (!userUpdated) {
      throw new Error('Ocorreu um error ao atualizar o usuário');
    }

    return userUpdated;
  }
}
