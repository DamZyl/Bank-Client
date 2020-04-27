import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CreateTransaction} from '../../../../../_shared/models/createTransaction';
import {ActivatedRoute} from '@angular/router';
import {DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter} from '@angular/material/core';
import {formatDate} from '@angular/common';

export const PICK_FORMATS = {
  parse: {dateInput: {month: 'short', year: 'numeric', day: 'numeric'}},
  display: {
    dateInput: 'input',
    monthYearLabel: {year: 'numeric', month: 'short'},
    dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
    monthYearA11yLabel: {year: 'numeric', month: 'long'}
  }
};

class PickDateAdapter extends NativeDateAdapter {
  // tslint:disable-next-line:ban-types
  format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      return formatDate(date, 'yyyy-MM-dd', this.locale);
    } else {
      return date.toDateString();
    }
  }
}

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css'],
  providers: [
    {provide: DateAdapter, useClass: PickDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS}
  ]
})
export class CreateTransactionComponent implements OnInit {
  form: FormGroup;

  constructor(private activateRoute: ActivatedRoute,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<CreateTransactionComponent>,
              @Inject(MAT_DIALOG_DATA) data: CreateTransaction) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      accountId: '',
      date: '',
      transactionType: '',
      description: '',
      value: ''
    });
  }

  save() {
    const date = new Date(this.form.value.date);
    const finalDate = JSON.stringify(date);
    this.form.value.date = finalDate.slice(1, 11);
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
