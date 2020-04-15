import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from '../admin.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {EmployeeComponent} from './components/employee/employee.component';

const routes: Routes = [
  {
    path: 'employees',
    component: AdminComponent,
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
