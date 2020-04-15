import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../../../../_shared/models/customer';
import {CustomerService} from '../../../../_shared/services/customer.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {UpdateCustomerComponent} from './update-customer/update-customer.component';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: any;
  displayedColumns: string[] = ['index', 'fullName', 'email', 'phoneNumber', 'address', 'city', 'country', 'accountCount', 'actions'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private customerService: CustomerService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(response => {
      this.customers = new MatTableDataSource<Customer>(response);
      this.customers.paginator = this.paginator;
    }, error => {
      console.log(error);
    });
  }

  getDetail(customer: any) {
    this.customerService.getCustomer(customer.id).subscribe(response => {
      this.router.navigate(['/admin', 'customers', 'detail', customer.id]);
    }, error => {
      console.log(error);
    });
  }

  deleteCustomer(customer: any) {
    this.customerService.deleteCustomer(customer.id).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
    window.location.reload();
  }

  applyFilter(filterValue: string) {
    this.customers.filter = filterValue.trim().toLowerCase();
  }

  openCreateDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(CreateCustomerComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log(data)
    );
  }

  openEditDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(UpdateCustomerComponent, dialogConfig);

    dialogRef.afterClosed().pipe(take(1)).subscribe(
      data => console.log(data)
    );
  }
}
