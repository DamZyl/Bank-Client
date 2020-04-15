import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../../_shared/models/customer';
import {CustomerService} from '../../../../_shared/services/customer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: Customer;

  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    this.getCustomer(id);
  }

  getCustomer(id) {
    this.customerService.getCustomer(id).subscribe(response => {
      this.customer = response;
    }, error => {
      console.log(error);
    });
  }
}
