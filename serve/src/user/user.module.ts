import { Module } from '@nestjs/common/decorators';
import { DatabaseModule } from 'src/prisma/database.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserUsecase } from './service/usecase/user.create.usecase';
import { DeleteUserUsecase } from './service/usecase/user.delete.usecase';
import { FindAllUserUsecase } from './service/usecase/user.findAll.usecase';
import { FindByIdUserUsecase } from './service/usecase/user.findById.usercase';
import { UpdateUserUsecase } from './service/usecase/user.update.usecase';
import { UserRepository } from './service/user.repository';
import { ServiceUser } from './service/user.service';
import { ControllerUser } from './user.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ControllerUser],
  providers: [
    ServiceUser,
    CreateUserUsecase,
    DeleteUserUsecase,
    FindAllUserUsecase,
    FindByIdUserUsecase,
    UpdateUserUsecase,
    UserRepository,
    PrismaService,
  ],
  exports: [ServiceUser, UserRepository],
})
export class ModuleUser {}
