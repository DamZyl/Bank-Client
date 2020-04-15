import {Guid} from './guid';

export class CreateTransaction {
  id: Guid;
  accountId: Guid;
  date: Date;
  transactionType: string;
  description: string;
  value: string;
}
