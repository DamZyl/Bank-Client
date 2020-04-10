import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerRoutingModule} from './customer-routing.module';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerComponent } from './components/customer/customer.component';

@NgModule({
  declarations: [CreateCustomerComponent, DeleteCustomerComponent, UpdateCustomerComponent, CustomerListComponent, CustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
