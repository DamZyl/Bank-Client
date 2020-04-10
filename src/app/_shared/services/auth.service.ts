import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Login} from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = `${environment.baseApiUrl}auth/`;

  constructor(private http: HttpClient) {
  }

  login(model: Login) {
    return this.http.post(`${this.baseUrl}login`, model);
  }
}
