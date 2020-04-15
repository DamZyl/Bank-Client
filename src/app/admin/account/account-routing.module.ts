import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountsListComponent} from './components/accounts-list/accounts-list.component';
import {AccountComponent} from './components/account/account.component';
import {CreateAccountComponent} from './components/create-account/create-account.component';
import {AdminComponent} from '../admin.component';

const routes: Routes = [
  {
    path: 'accounts',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AccountsListComponent
      },
      {
        path: 'detail/:id',
        component: AccountComponent
      },
      {
        path: 'create',
        component: CreateAccountComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
