import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { AccountComponent } from './components/account/account.component';
import { CreateAccountComponent } from './components/accounts-list/create-account/create-account.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AccountsListComponent,
    AccountComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class AccountModule { }
