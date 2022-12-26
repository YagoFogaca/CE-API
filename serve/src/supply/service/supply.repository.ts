import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSupplyDto } from '../dto/create.supplyDto';
import { ISupplyEntity } from '../entities/supply.entity';

@Injectable()
export class SupplyRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(supply: CreateSupplyDto, id: string): Promise<ISupplyEntity> {
    return await this.prismaService.supply.create({
      data: {
        id: id,
        nome: supply.nome,
        quant_estoque: supply.quant_estoque,
        unidade: supply.unidade,
        ativo: supply.ativo,
        id_user: supply.id_user,
      },
      include: {
        user: true,
        entrySupply: true,
        exitSupply: true,
      },
    });
  }

  async findAll(): Promise<ISupplyEntity[]> {
    return await this.prismaService.supply.findMany({
      include: {
        user: true,
        entrySupply: true,
        exitSupply: true,
      },
    });
  }

  // async findById(id: string): Promise<IUserEntity> {
  //   return await this.prismaService.user.findFirst({ where: { id: id } });
  // }
}
