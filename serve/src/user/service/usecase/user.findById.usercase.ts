import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IUserEntity } from 'src/user/entities/user.entity';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptions.parms';
import { UserRepository } from '../user.repository';

@Injectable()
export class FindByIdUserUsecase {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(id: string): Promise<IUserEntity> {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new Exception(
                Exceptions.NotFoundData,
                'Usuário não encontrado com esse ID',
            );
        }

        return user;
    }
}
