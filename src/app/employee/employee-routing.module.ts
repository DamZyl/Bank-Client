import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeComponent} from './employee.component';
import {RoleGuardService} from '../_shared/services/role-guard.service';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'Employee'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
