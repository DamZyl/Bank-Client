import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CreateEmployee} from '../../../../../_shared/models/createEmployee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  form: FormGroup;
  roles: string[] = ['Admin', 'Employee'];

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<CreateEmployeeComponent>,
              @Inject(MAT_DIALOG_DATA) data: CreateEmployee) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      roleInSystem: '',
      position: '',
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
