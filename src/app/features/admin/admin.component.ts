import {Component} from '@angular/core';
import {AuthService} from '../../core/auth/auth.service';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin',
  template: `
    {{this.tweets | json}}
    <hr />
    <button (click)="logoutHandler()">Logout</button>
  `,
  styles: []
})
export class AdminComponent {
  tweets: any[];

  constructor(
    public authService: AuthService, 
    private http: HttpClient,
    private router: Router
  ) {

    this.http.get<any>('https://my-json-server.typicode.com/marco7403/repo/tweets')
      .subscribe(res => this.tweets = res);
  }

  logoutHandler() {
    this.router.navigateByUrl('/')
    this.authService.logout();
  }

}
