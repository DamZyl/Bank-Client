import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from '../employee.component';
import {AccountsListComponent} from './components/accounts-list/accounts-list.component';
import {AccountComponent} from './components/account/account.component';
import {CustomerComponent} from '../../customer/customer.component';
import {RoleGuardService} from '../../_shared/services/role-guard.service';

const routes: Routes = [
  {
    path: 'accounts',
    component: EmployeeComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'Employee'
    },
    children: [
      {
        path: '',
        component: AccountsListComponent
      },
      {
        path: 'detail/:id',
        component: AccountComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
