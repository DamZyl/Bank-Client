import {Guid} from './guid';

export class Account {
  id: Guid;
  customerId: Guid;
  accountNumber: string;
  balance: number;
}
