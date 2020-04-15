import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CreateCustomer} from '../../../../../_shared/models/createCustomer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<CreateCustomerComponent>,
              @Inject(MAT_DIALOG_DATA) data: CreateCustomer) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      street: '',
      number: '',
      postCode: '',
      city: '',
      country: '',
      phoneNumber: ''
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
