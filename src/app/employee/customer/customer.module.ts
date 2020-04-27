import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerRoutingModule} from './customer-routing.module';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerComponent } from './components/customer/customer.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [CustomerListComponent, CustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    MatPaginatorModule
  ]
})
export class CustomerModule { }
