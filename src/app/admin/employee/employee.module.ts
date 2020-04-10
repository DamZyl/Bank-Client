import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

@NgModule({
  declarations: [EmployeeListComponent, EmployeeComponent, CreateEmployeeComponent, DeleteEmployeeComponent, UpdateEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
