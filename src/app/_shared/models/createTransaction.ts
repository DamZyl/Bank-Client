import {Guid} from './guid';

export class CreateTransaction {
  id: Guid;
  accountId: Guid;
  date: string;
  transactionType: Date;
  description: string;
  value: number;
}
