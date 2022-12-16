import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IUserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class FindAllUserUsecase {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(): Promise<IUserEntity[]> {
    return await this.prismaService.user.findMany();
  }
}
