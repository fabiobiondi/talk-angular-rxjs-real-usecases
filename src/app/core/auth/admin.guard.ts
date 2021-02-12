import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ADMIN } from './auth';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.role$
      .pipe(
        map(role => role === ADMIN),
        tap((allowAccess) => {
          // if not admin...
          if (!allowAccess) {
            // redirect to login
            console.log('access deny');
            this.router.navigateByUrl('/');
          }
        })
      );
  }
}
