import {Guid} from './guid';

export class Transaction {
  id: Guid;
  accountId: Guid;
  date: Date;
  transactionType: string;
  description: string;
  value: number;
}
