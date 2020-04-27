import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../_shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  role: string;
  name: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: ''
    });
  }

  login(value) {
    this.authService.login(value).subscribe(response => {
      this.role = this.authService.getRole();
      if (this.role === 'Admin') {
          this.router.navigate(['/admin']);
      } else if (this.role === 'Employee') {
          this.router.navigate(['/employee']);
      } else {
        this.router.navigate(['/customer']);
      }
    }, error => {
      window.alert(error);
    });
  }
}
