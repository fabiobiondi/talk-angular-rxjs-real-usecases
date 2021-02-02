import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  template: `
    <form>
      <input type="text" value="anyvalue">
      <input type="password" value="123">
      <button (click)="login()">Sign In</button>
    </form>
  `,
  styles: []
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private route: Router
  ) {
    this.authService.isLogged$
      .pipe(filter(state => !!state))
      .subscribe(() => {
        console.log('go to admin');
        this.route.navigateByUrl('admin');
      });
  }

  login() {
    this.authService.login();
  }
}
