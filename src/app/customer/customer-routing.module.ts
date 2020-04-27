import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from './customer.component';
import {RoleGuardService} from '../_shared/services/role-guard.service';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'Customer'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
