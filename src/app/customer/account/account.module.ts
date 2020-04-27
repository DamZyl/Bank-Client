import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountRoutingModule} from './account-routing.module';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { AccountComponent } from './components/account/account.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { CreateTransactionComponent } from './components/account/create-transaction/create-transaction.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [AccountsListComponent, AccountComponent, CreateTransactionComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule
  ]
})
export class AccountModule { }
