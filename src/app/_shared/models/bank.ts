import {Guid} from './guid';
import {Account} from './account';

export class Bank {
  id: Guid;
  name: string;
  address: string;
  city: string;
  country: string;
  accountCount: number;
  accounts: Account[];
}
