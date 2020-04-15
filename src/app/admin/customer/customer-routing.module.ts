import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from '../admin.component';
import {AccountsListComponent} from '../account/components/accounts-list/accounts-list.component';
import {AccountComponent} from '../account/components/account/account.component';
import {CreateAccountComponent} from '../account/components/create-account/create-account.component';
import {CustomerListComponent} from './components/customer-list/customer-list.component';
import {CustomerComponent} from './components/customer/customer.component';
import {CreateCustomerComponent} from './components/create-customer/create-customer.component';
import {UpdateCustomerComponent} from './components/update-customer/update-customer.component';

const routes: Routes = [
  {
    path: 'customers',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: CustomerListComponent
      },
      {
        path: 'detail/:id',
        component: CustomerComponent
      },
      {
        path: 'create',
        component: CreateCustomerComponent
      },
      {
        path: 'update',
        component: UpdateCustomerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
