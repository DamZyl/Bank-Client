import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { AccountComponent } from './components/account/account.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { DeleteAccountComponent } from './components/delete-account/delete-account.component';

@NgModule({
  declarations: [AccountsListComponent, AccountComponent, CreateAccountComponent, DeleteAccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
