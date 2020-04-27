import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from '../employee.component';
import {CustomerListComponent} from './components/customer-list/customer-list.component';
import {CustomerComponent} from './components/customer/customer.component';

const routes: Routes = [
  {
    path: 'customers',
    component: EmployeeComponent,
    children: [
      {
        path: '',
        component: CustomerListComponent
      },
      {
        path: 'detail/:id',
        component: CustomerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
