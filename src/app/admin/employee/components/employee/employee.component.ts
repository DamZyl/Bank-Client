import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../../_shared/models/employee';
import {EmployeeService} from '../../../../_shared/services/employee.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: Employee;

  constructor(private activatedRoute: ActivatedRoute,
              private employeeService: EmployeeService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    this.getEmployee(id);
  }

  getEmployee(id) {
    this.employeeService.getEmployee(id).subscribe(response => {
      this.employee = response;
    }, error => {
      console.log(error);
    });
  }
}
