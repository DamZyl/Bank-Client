import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from '../../../../_shared/services/employee.service';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {MatTableDataSource} from '@angular/material/table';
import {Employee} from '../../../../_shared/models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any;
  displayedColumns: string[] = ['index', 'fullName', 'email', 'phoneNumber', 'position', 'actions'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private employeeService: EmployeeService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(response => {
      this.employees = new MatTableDataSource<Employee>(response);
      this.employees.paginator = this.paginator;
    }, error => {
      console.log(error);
    });
  }

  getDetail(employee: any) {
    this.router.navigate(['/admin', 'employees', 'detail', employee.id]);
  }

  deleteEmployee(employee: any) {
    this.employeeService.deleteEmployee(employee.id).subscribe(response => {
      window.location.reload();
    }, error => {
      console.log(error);
    });
  }

  applyFilter(filterValue: string) {
    this.employees.filter = filterValue.trim().toLowerCase();
  }

  openCreateDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(CreateEmployeeComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => this.employeeService.createEmployee(data).subscribe(response => {
        window.location.reload();
      }, error => {
        console.log(error);
      })
    );
  }

  openEditDialog(employee: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(UpdateEmployeeComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => this.employeeService.updateEmployee(employee.id, data).subscribe(response => {
        window.location.reload();
      }, error => {
        console.log(error);
      })
    );
  }
}
