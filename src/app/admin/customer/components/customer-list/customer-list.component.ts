import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../../_shared/models/customer';
import {CustomerService} from '../../../../_shared/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(response => {
      this.customers = response;
    }, error => {
      console.log(error);
    });
  }
}
