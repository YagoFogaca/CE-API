import { randomUUID } from 'crypto';
import { Exception } from 'src/utils/exceptions/exception';
import { Exceptions } from 'src/utils/exceptions/exceptions.parms';
import { CreateEntryDto } from '../dto/create.entryDto';

export class EntryValidationEntity {
   id: string;
   id_user: string;
   id_supply: string;
   quant: number;
   data: Date;

   constructor({ id_user, id_supply, quant, data = null }: CreateEntryDto) {
      this.id_user = id_user;
      this.id_supply = id_supply;
      this.quant = quant;
      this.data = data;
   }

   validateQuantity() {
      if (this.quant <= 0) {
         throw new Exception(
            Exceptions.InvalidData,
            'A entrada de insumo não pode ser menor ou igual a zero',
         );
      }
   }

   validateDate() {
      if (!this.data) {
         const date = Date.now();
         const today = new Date(date);
         this.data = today;
      }
   }

   returnEntry() {
      this.validateQuantity();
      this.validateDate();
      return {
         id: randomUUID(),
         id_user: this.id_user,
         id_supply: this.id_supply,
         quant: this.quant,
         data: this.data,
      };
   }
}
