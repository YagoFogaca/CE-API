import { PrismaService } from 'src/prisma/prisma.service';
import { IUserEntity } from 'src/user/entities/user.entity';

export class FindByIdUserUsecase {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(id: string): Promise<IUserEntity> {
    return await this.prismaService.user.findFirst({ where: { id: id } });
  }
}
