import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../../../../_shared/models/customer';
import {CustomerService} from '../../../../_shared/services/customer.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {UpdateCustomerComponent} from './update-customer/update-customer.component';

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
    this.router.navigate(['/admin', 'customers', 'detail', customer.id]);
  }

  deleteCustomer(customer: any) {
    this.customerService.deleteCustomer(customer.id).subscribe(response => {
      window.location.reload();
    }, error => {
      console.log(error);
    });
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
      data => this.customerService.createCustomer(data).subscribe(response => {
        window.location.reload();
      }, error => {
        console.log(error);
      })
    );
  }

  openEditDialog(customer: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(UpdateCustomerComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => this.customerService.updateCustomer(customer.id, data).subscribe(response => {
        window.location.reload();
      }, error => {
        console.log(error);
      })
    );
  }
}
