import { Exceptions } from './exceptions.parms';

export class Exception {
  constructor(readonly exception: Exceptions, readonly message: string) {}
}
