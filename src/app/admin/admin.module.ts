import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AccountModule } from './account/account.module';
import { CustomerModule } from './customer/customer.module';
import { EmployeeModule } from './employee/employee.module';
import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [AdminComponent, NavbarComponent, HeaderComponent],
  imports: [
    CommonModule,
    AccountModule,
    CustomerModule,
    EmployeeModule,
    AdminRoutingModule,
    MatMenuModule
  ]
})
export class AdminModule { }
