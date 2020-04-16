import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerRoutingModule} from './customer-routing.module';
import { CreateCustomerComponent } from './components/customer-list/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './components/customer-list/update-customer/update-customer.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerComponent } from './components/customer/customer.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CreateCustomerComponent,
    UpdateCustomerComponent,
    CustomerListComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
