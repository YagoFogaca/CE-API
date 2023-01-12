import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateEntryDto } from '../dto/update.entryDto';
import { IEntryEntity } from '../entities/entry.entity';

@Injectable()
export class EntryRepository {
   private _include = { supply: true, user: true };
   constructor(private readonly prismaService: PrismaService) {}

   async create({
      id,
      id_supply,
      id_user,
      quant,
      data,
   }: IEntryEntity): Promise<IEntryEntity> {
      return await this.prismaService.entrySupply.create({
         data: {
            data: data,
            id: id,
            id_supply: id_supply,
            id_user: id_user,
            quant: quant,
         },
         include: this._include,
      });
   }

   async findAll(): Promise<IEntryEntity[]> {
      return await this.prismaService.entrySupply.findMany();
   }

   async findById(id: string): Promise<IEntryEntity> {
      return await this.prismaService.entrySupply.findFirst({
         where: { id: id },
         include: this._include,
      });
   }

   async delete(id: string): Promise<IEntryEntity> {
      return await this.prismaService.entrySupply.delete({ where: { id: id } });
   }

   async update(id: string, entrySuply: UpdateEntryDto): Promise<IEntryEntity> {
      return await this.prismaService.entrySupply.update({
         where: { id: id },
         data: entrySuply,
      });
   }
}
