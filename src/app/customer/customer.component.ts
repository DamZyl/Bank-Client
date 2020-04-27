import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_shared/services/auth.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  name: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUsername();
  }

  getUsername() {
    this.name = this.authService.getUsername();
  }

  logout() {
    this.authService.logout();
  }
}
