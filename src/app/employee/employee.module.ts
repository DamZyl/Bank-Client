import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { CustomerModule } from './customer/customer.module';
import { EmployeeRoutingModule } from './employee-routing.module';
import {AccountModule} from './account/account.module';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    CustomerModule,
    AccountModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
