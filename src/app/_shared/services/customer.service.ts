import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CreateCustomer} from '../models/createCustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = `${environment.baseApiUrl}`;

  constructor(private http: HttpClient) {
  }

  register(model: CreateCustomer) {
    return this.http.post(`${this.baseUrl}auth/register`, model);
  }
}
