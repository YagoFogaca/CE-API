import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IUserEntity } from 'src/user/entities/user.entity';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptions.parms';
import { UserRepository } from '../user.repository';

@Injectable()
export class DeleteUserUsecase {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(id: string): Promise<IUserEntity> {
        try {
            return await this.userRepository.delete(id);
        } catch (err) {
            throw new Exception(
                Exceptions.NotFoundData,
                'Nenhum usuário com esse ID',
            );
        }
    }
}
