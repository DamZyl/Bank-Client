import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from '../admin.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {EmployeeComponent} from './components/employee/employee.component';
import {RoleGuardService} from '../../_shared/services/role-guard.service';

const routes: Routes = [
  {
    path: 'employees',
    component: AdminComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'Admin'
    },
    children: [
      {
        path: '',
        component: EmployeeListComponent
      },
      {
        path: 'detail/:id',
        component: EmployeeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
