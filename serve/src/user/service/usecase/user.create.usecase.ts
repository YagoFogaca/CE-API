import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create.userDto';
import { IUserEntity } from 'src/user/entities/user.entity';
import { UserValidationEntity } from 'src/user/entities/user.validation.entity';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptions.parms';
import { UserRepository } from '../user.repository';

@Injectable()
export class CreateUserUsecase {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(user: CreateUserDto): Promise<IUserEntity> {
        const verifyUsername = await this.userRepository.findByUserName(
            user.nome_usuario,
        );
        if (verifyUsername) {
            throw new Exception(
                Exceptions.InvalidData,
                'O nome de usuário já existe',
            );
        }

        const userEntity = new UserValidationEntity(user);
        const userCreated = await this.userRepository.create(
            userEntity.returnUser(),
        );
        if (!userCreated) {
            throw new Exception(
                Exceptions.DatabaseException,
                'Ocorreu um error ao criar um usuário',
            );
        }

        return userCreated;
    }
}
