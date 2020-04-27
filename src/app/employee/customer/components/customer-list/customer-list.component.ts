import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {CustomerService} from '../../../../_shared/services/customer.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Customer} from '../../../../_shared/models/customer';

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
              private router: Router) { }

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
    this.router.navigate(['/employee', 'customers', 'detail', customer.id]);
  }

  applyFilter(filterValue: string) {
    this.customers.filter = filterValue.trim().toLowerCase();
  }
}
