import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Login} from '../models/login';
import {BehaviorSubject, Observable} from 'rxjs';
import {Token} from '../models/token';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Guid} from '../models/guid';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = `${environment.baseApiUrl}auth/`;
  private currentUserSubject: BehaviorSubject<Token>;
  public currentUser: Observable<Token>;
  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient,
              private router: Router) {
    this.currentUserSubject = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public getCurrentUserToken(): Token {
    return this.currentUserSubject.value;
  }

  login(model: Login) {
    return this.http.post<Token>(`${this.baseUrl}login`, model)
      .pipe(map(token => {
        localStorage.setItem('currentUser', JSON.stringify(token));
        this.currentUserSubject.next(token);
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['']);
  }

  isAuthenticated(): boolean {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser === null) {
      return false;
    } else {
      const token = JSON.parse(localStorage.getItem('currentUser'));
      return !this.jwtHelper.isTokenExpired(token);
    }
  }

  getRole() {
    const decodedToken = this.jwtHelper.decodeToken(JSON.parse(localStorage.getItem('currentUser')));
    const tmp = JSON.stringify(decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
    return tmp.substring(1, tmp.length - 1);
  }

  getUsername() {
    const decodedToken = this.jwtHelper.decodeToken(JSON.parse(localStorage.getItem('currentUser')));
    const tmp = JSON.stringify(decodedToken.unique_name);
    return tmp.substring(1, tmp.length - 1);
  }

  getUserId() {
    const decodedToken = this.jwtHelper.decodeToken(JSON.parse(localStorage.getItem('currentUser')));
    const tmp = JSON.stringify(decodedToken.sub);
    return Guid.parse(tmp.substring(1, tmp.length - 1));
  }
}
