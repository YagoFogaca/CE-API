import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from '../dto/update.userDto';
import { IUserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: IUserEntity): Promise<IUserEntity> {
    return await this.prismaService.user.create({ data: user });
  }

  async findAll(): Promise<IUserEntity[]> {
    return await this.prismaService.user.findMany();
  }

  async findById(id: string): Promise<IUserEntity> {
    return await this.prismaService.user.findFirst({ where: { id: id } });
  }

  async update(user: UpdateUserDto): Promise<IUserEntity> {
    return await this.prismaService.user.update({
      where: { id: user.id },
      data: user,
    });
  }

  async delete(id: string): Promise<IUserEntity> {
    return await this.prismaService.user.delete({ where: { id: id } });
  }

  async findByUserName(userName: string) {
    return await this.prismaService.user.findFirst({
      where: { nome_usuario: userName },
    });
  }
}
