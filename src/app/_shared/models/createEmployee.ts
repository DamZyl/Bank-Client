import {Guid} from './guid';

export class CreateEmployee {
  id: Guid;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  roleInSystem: string;
  position: string;
}
