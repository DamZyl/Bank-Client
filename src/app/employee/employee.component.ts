import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {AuthService} from '../_shared/services/auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  name: string;

  @ViewChild('drawer', { static: false })
  drawer: MatSidenav;

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
