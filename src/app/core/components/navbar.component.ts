import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="btn-group">
      <button
        class="btn btn-outline-primary"
        routerLink="/users"
        routerLinkActive="active"
      > Demo Users (forkJoin)</button>
  
      <button
        class="btn btn-outline-primary"
        routerLink="/demo-async-pipe"
        routerLinkActive="active"
      > Demo Users (async pipe)</button>
  
      <button
        class="btn btn-outline-primary"
        routerLink="/meteo" routerLinkActive="active"
      > METEO</button>
  
      <!--Logout: hidden  by custom directive -->
      <button
        class="btn btn-outline-primary"
        (click)='logout()'
      >LOGOUT (Nome e Cognome)</button>
    </div>
  `,
  styles: [`
    .active { background: orange; }
  `]
})
export class NavbarComponent  {


  logout(): void {
    console.log('logout')
  }
}

