import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IUserEntity } from 'src/user/entities/user.entity';
import { UserRepository } from '../user.repository';

@Injectable()
export class FindAllUserUsecase {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(): Promise<IUserEntity[]> {
        return await this.userRepository.findAll();
    }
}
