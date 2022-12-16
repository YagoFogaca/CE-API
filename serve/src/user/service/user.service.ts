import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create.userDto';
import { UpdateUserDto } from '../dto/update.userDto';
import { IUserEntity } from '../entities/user.entity';
import { CreateUserUsecase } from './usecase/user.create.usecase';
import { DeleteUserUsecase } from './usecase/user.delete.usecase';
import { FindAllUserUsecase } from './usecase/user.findAll.usecase';
import { FindByIdUserUsecase } from './usecase/user.findById.usercase';
import { UpdateUserUsecase } from './usecase/user.update.usecase';

@Injectable()
export class ServiceUser {
  constructor(
    private readonly createUserUsecase: CreateUserUsecase,
    private readonly deleteUserUsecase: DeleteUserUsecase,
    private readonly findAllUserUsecase: FindAllUserUsecase,
    private readonly findByIdUserUsecase: FindByIdUserUsecase,
    private readonly updateUserUsecase: UpdateUserUsecase,
  ) {}

  async create(user: CreateUserDto): Promise<IUserEntity> {
    return await this.createUserUsecase.execute(user);
  }

  async delete(id: string): Promise<string> {
    await this.deleteUserUsecase.execute(id);
    return 'Usuário deletado com sucesso';
  }

  async findAll(): Promise<IUserEntity[]> {
    return await this.findAllUserUsecase.execute();
  }
  async findById(id: string): Promise<IUserEntity> {
    return await this.findByIdUserUsecase.execute(id);
  }

  async update(user: UpdateUserDto, id: string): Promise<IUserEntity> {
    return await this.updateUserUsecase.execute({ ...user, id });
  }
}
