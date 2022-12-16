import { CreateUserDto } from '../dto/create.userDto';

export interface IUserEntity extends CreateUserDto {
  id: string;
}
