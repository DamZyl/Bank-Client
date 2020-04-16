import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CreateTransaction} from '../models/createTransaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  baseUrl = `${environment.baseApiUrl}`;

  constructor(private http: HttpClient) {
  }

  createTransaction(model: CreateTransaction) {
    return this.http.post(`${this.baseUrl}account/${model.accountId}/transaction/`, model);
  }
}
