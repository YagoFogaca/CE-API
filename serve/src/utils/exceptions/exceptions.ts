import {
  BadRequestException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { ParmsExceptions, Exceptions } from './exceptions.parms';

export function HandleExceptions({ exception, message }: ParmsExceptions) {
  if (
    exception === Exceptions.InvalidData ||
    exception === Exceptions.NotFoundData
  ) {
    throw new BadRequestException(message);
  }

  if (exception === Exceptions.DatabaseException) {
    throw new InternalServerErrorException(message);
  }
  if (exception === Exceptions.UnauthorizedException) {
    throw new UnauthorizedException(message);
  }
}
