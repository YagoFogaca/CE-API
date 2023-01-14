import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateSupplyDto } from '../dto/update.supplyDto';
import { ISupplyEntity } from '../entities/supply.entity';

@Injectable()
export class SupplyRepository {
   constructor(private readonly prismaService: PrismaService) {}

   async create(supply: ISupplyEntity): Promise<ISupplyEntity> {
      return await this.prismaService.supply.create({
         data: {
            id: supply.id,
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

   async findByName(name: string): Promise<ISupplyEntity> {
      return await this.prismaService.supply.findFirst({
         where: { nome: name },
      });
   }

   async findById(id: string): Promise<ISupplyEntity> {
      return await this.prismaService.supply.findFirst({
         where: { id: id },
         include: {
            user: true,
            entrySupply: true,
            exitSupply: true,
         },
      });
   }

   async delete(id: string): Promise<ISupplyEntity> {
      return await this.prismaService.supply.delete({ where: { id: id } });
   }

   async update(id: string, supply: UpdateSupplyDto): Promise<ISupplyEntity> {
      return await this.prismaService.supply.update({
         where: { id: id },
         data: supply,
      });
   }
}
