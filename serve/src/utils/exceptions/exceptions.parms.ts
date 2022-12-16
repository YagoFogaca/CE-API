export enum Exceptions {
  InvalidData,
  DatabaseException,
  NotFoundData,
  UnauthorizedException,
}

export interface ParmsExceptions {
  message: string;
  exception: Exceptions;
}
