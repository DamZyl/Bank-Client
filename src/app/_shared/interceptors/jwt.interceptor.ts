import {HTTP_INTERCEPTORS, HttpInterceptor} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ErrorInterceptor} from './error.interceptor';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  // tslint:disable-next-line: max-line-length
  intercept(req: import('@angular/common/http').HttpRequest<any>, next: import('@angular/common/http').HttpHandler): import('rxjs').Observable<import('@angular/common/http').HttpEvent<any>> {
    const currentUser = this.authService.getCurrentUserToken();

    if (currentUser) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser}`
        }
      });
    }

    return next.handle(req);
  }
}

export const JwtInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};
