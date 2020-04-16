import {Guid} from './guid';

export class CreateAccount {
  id: Guid;
  customerId: Guid;
  bankId: Guid;
  accountNumber: string;
  balance: number;
}
