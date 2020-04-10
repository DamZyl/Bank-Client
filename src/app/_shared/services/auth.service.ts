import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Login} from '../models/login';
import {BehaviorSubject, Observable} from 'rxjs';
import {Token} from '../models/token';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = `${environment.baseApiUrl}auth/`;
  private currentUserSubject: BehaviorSubject<Token>;
  public currentUser: Observable<Token>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public getCurrentUserToken(): Token {
    return this.currentUserSubject.value;
  }

  // FIX PROBLEM WITH ERROR MESSAGE
  login(model: Login) {
    return this.http.post<Token>(`${this.baseUrl}login`, model)
      .pipe(map(token => {
        localStorage.setItem('currentUser', JSON.stringify(token));
        this.currentUserSubject.next(token);
        return token;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    //this.router.navigate(['/login']);
  }
}
