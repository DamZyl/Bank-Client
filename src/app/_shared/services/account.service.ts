import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AccountDetail} from '../models/account-detail';
import {CreateAccount} from '../models/createAccount';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = `${environment.baseApiUrl}`;

  constructor(private http: HttpClient) {
  }

  getAccount(id): Observable<AccountDetail> {
    return this.http.get<AccountDetail>(`${this.baseUrl}account/${id}`);
  }

  getAccountForCustomer(customerId): Observable<AccountDetail> {
    return this.http.get<AccountDetail>(`${this.baseUrl}account/customer/${customerId}`);
  }

  createAccount(model: CreateAccount) {
    return this.http.post(`${this.baseUrl}bank/${model.customerId}/account/`, model);
  }

  deleteAccount(customerId, id) {
    return this.http.delete(`${this.baseUrl}bank/${customerId}/account/${id}`);
  }
}
