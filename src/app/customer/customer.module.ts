import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { AccountModule } from './account/account.module';
import { TransactionModule } from './transaction/transaction.module';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    AccountModule,
    TransactionModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
