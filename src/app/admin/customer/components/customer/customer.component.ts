import {Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../../../../_shared/models/customer';
import {CustomerService} from '../../../../_shared/services/customer.service';
import {ActivatedRoute} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Account} from '../../../../_shared/models/account';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: Customer;
  accounts: any;
  displayedColumns: string[] = ['index', 'accountNumber', 'balance'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    this.getCustomer(id);
  }

  getCustomer(id) {
    this.customerService.getCustomer(id).subscribe(response => {
      this.customer = response;
      this.accounts = new MatTableDataSource<Account>(response.accounts);
      this.accounts.paginator = this.paginator;
    }, error => {
      console.log(error);
    });
  }
}
