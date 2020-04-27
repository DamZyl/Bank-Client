import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(public authService: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;

    if (!this.authService.isAuthenticated() || this.authService.getRole() !== expectedRole) {
      this.authService.logout();
      this.router.navigate([environment.baseApiUrl]);
      return false;
    }
    return true;
  }

}
