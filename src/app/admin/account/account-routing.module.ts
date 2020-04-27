import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountsListComponent} from './components/accounts-list/accounts-list.component';
import {AccountComponent} from './components/account/account.component';
import {AdminComponent} from '../admin.component';
import {CustomerComponent} from '../../customer/customer.component';
import {RoleGuardService} from '../../_shared/services/role-guard.service';

const routes: Routes = [
  {
    path: 'accounts',
    component: AdminComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'Admin'
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
