import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../../_shared/models/employee';
import {EmployeeService} from '../../../../_shared/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(response => {
      this.employees = response;
    }, error => {
      console.log(error);
    });
  }
}
