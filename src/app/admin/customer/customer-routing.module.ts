import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from '../admin.component';
import {CustomerListComponent} from './components/customer-list/customer-list.component';
import {CustomerComponent} from './components/customer/customer.component';
import {RoleGuardService} from '../../_shared/services/role-guard.service';

const routes: Routes = [
  {
    path: 'customers',
    component: AdminComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'Admin'
    },
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
