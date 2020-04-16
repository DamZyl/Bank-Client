import {Account} from './account';
import {Transaction} from './transaction';

export class AccountDetail extends Account {
  transactionCount: number;
  transactions: Transaction[];
}
