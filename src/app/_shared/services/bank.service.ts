import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Bank} from '../models/bank';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  baseUrl = `${environment.baseApiUrl}bank/`;

  constructor(private http: HttpClient) {
  }

  getBankInfo(): Observable<Bank> {
    return this.http.get<Bank>(this.baseUrl);
  }
}
