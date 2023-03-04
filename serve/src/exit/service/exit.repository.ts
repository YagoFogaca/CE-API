import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateExitDto } from '../dto/update.exit.dto';
import { IExitEntity } from '../entities/exit.entity';

@Injectable()
export class ExitRepository {
   private _include = { supply: true, user: true };
   constructor(private readonly prismaService: PrismaService) {}

   async create(exit: IExitEntity) {
      return await this.prismaService.exitSupply.create({
         data: {
            data: exit.data,
            id: exit.id,
            id_supply: exit.id_supply,
            id_user: exit.id_user,
            quant: exit.quant,
         },
         include: this._include,
      });
   }

   async findAll(): Promise<IExitEntity[]> {
      return await this.prismaService.exitSupply.findMany({
         include: this._include,
      });
   }

   async findById(id: string): Promise<IExitEntity> {
      return await this.prismaService.exitSupply.findFirst({
         where: { id: id },
         include: this._include,
      });
   }

   async delete(id: string): Promise<IExitEntity> {
      return await this.prismaService.exitSupply.delete({
         where: { id: id },
         include: this._include,
      });
   }

   async update(id: string, exit: UpdateExitDto): Promise<IExitEntity> {
      return await this.prismaService.exitSupply.update({
         where: { id: id },
         data: exit,
         include: this._include,
      });
   }
}
