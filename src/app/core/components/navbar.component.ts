import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  template: `
    <!--Login Button-->
    <div class="btn-group">
      <!--Admin-->
      <button
        class="btn btn-outline-primary"
        routerLink="/users"
        routerLinkActive="active"
        *appIfRole="'admin'"
      > Demo Users (forkJoin)</button>
  
      <button
        class="btn btn-outline-primary"
        routerLink="/demo-async-pipe"
        routerLinkActive="active"
        *appIfRole="'admin'"
      > Demo Users (async pipe)</button>
  
      <button
        class="btn btn-outline-primary"
        routerLink="/meteo" routerLinkActive="active"
        *ngIf="(authService.isLogged$ | async)"
      > METEO</button>
  
      <!--Logout: hidden  by custom directive -->
      <button
        *appIfLogged
        class="btn btn-outline-primary"
        (click)='logout()'
      >LOGOUT ({{ authService.displayName$ | async }})</button>
    </div>
  `,
  styles: [`
    .active { background: orange; }
  `]
})
export class NavbarComponent  {
  constructor(private router: Router, public authService: AuthService) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.url)
      )
      .subscribe(res => console.log(res));
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}

