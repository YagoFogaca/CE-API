import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IUserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class DeleteUserUsecase {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(id: string): Promise<IUserEntity> {
    return await this.prismaService.user.delete({ where: { id: id } });
  }
}
