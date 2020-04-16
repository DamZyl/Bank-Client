import {Guid} from './guid';
import {Account} from './account';

export class Customer {
  id: Guid;
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
  city: string;
  country: string;
  accountCount: number;
  accounts: Account[];
}
