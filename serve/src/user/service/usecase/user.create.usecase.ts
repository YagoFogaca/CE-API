import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create.userDto';
import { IUserEntity } from 'src/user/entities/user.entity';
import { UserValidationEntity } from 'src/user/entities/user.validation.entity';
import { UserRepository } from '../user.repository';

@Injectable()
export class UserCreateUsecase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(user: CreateUserDto): Promise<IUserEntity> {
    const verifyUsername = await this.userRepository.findByUserName(
      user.nome_usuario,
    );
    if (verifyUsername) {
      throw new Error('O nome de usuário já existe');
    }

    const userEntity = new UserValidationEntity(user);

    const userCreated = await this.userRepository.create(
      userEntity.returnUser(),
    );
    if (!userCreated) {
      throw new Error('Ocorreu um error ao criar um usuário');
    }

    return userCreated;
  }
}
