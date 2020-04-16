import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UpdateEmployee} from '../../../../../_shared/models/updateEmployee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<UpdateEmployeeComponent>,
              @Inject(MAT_DIALOG_DATA) data: UpdateEmployee) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      phoneNumber: '',
      email: ''
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
