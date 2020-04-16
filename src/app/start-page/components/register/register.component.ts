import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {CustomerService} from '../../../_shared/services/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      street: '',
      number: '',
      postCode: '',
      city: '',
      country: '',
      phoneNumber: ''
    });
  }

  register(value) {
    this.customerService.register(value).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
}
