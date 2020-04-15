import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CreateCustomer} from '../models/createCustomer';
import {Observable} from 'rxjs';
import {Customer} from '../models/customer';
import {UpdateCustomer} from '../models/updateCustomer';

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

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}customer/`);
  }

  getCustomer(id): Observable<Customer> {
    return this.http.get<Customer>(`${this.baseUrl}customer/${id}`);
  }

  createCustomer(model: CreateCustomer) {
    return this.http.post(`${this.baseUrl}bank/customer`, model);
  }

  updateCustomer(id, model: UpdateCustomer) {
    return this.http.put(`${this.baseUrl}customer/${id}`, model);
  }

  deleteCustomer(id) {
    return this.http.delete(`${this.baseUrl}bank/customer/${id}`);
  }
}
