import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin.component';
import {RoleGuardService} from '../_shared/services/role-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'Admin'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
