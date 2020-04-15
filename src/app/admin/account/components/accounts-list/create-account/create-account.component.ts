import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CreateAccount} from '../../../../../_shared/models/createAccount';
import {CustomerService} from '../../../../../_shared/services/customer.service';
import {Customer} from '../../../../../_shared/models/customer';
import {Bank} from '../../../../../_shared/models/bank';
import {BankService} from '../../../../../_shared/services/bank.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  form: FormGroup;
  customers: Customer[];
  bank: Bank;

  constructor(private customerService: CustomerService,
              private bankService: BankService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<CreateAccountComponent>,
              @Inject(MAT_DIALOG_DATA) data: CreateAccount) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      customerId: '',
      bankId: '',
      accountNumber: '',
      balance: ''
    });

    this.getCustomers();
    this.getBankInfo();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(response => {
      this.customers = response;
    }, error => {
      console.log(error);
    });
  }

  getBankInfo() {
    this.bankService.getBankInfo().subscribe(response => {
      this.bank = response;
    }, error => {
      console.log(error);
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
