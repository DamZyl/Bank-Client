import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CreateCustomer} from '../../../../../_shared/models/createCustomer';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<UpdateCustomerComponent>,
              @Inject(MAT_DIALOG_DATA) data: CreateCustomer) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      phoneNumber: '',
      email: '',
      street: '',
      number: '',
      postCode: '',
      city: '',
      country: ''
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
