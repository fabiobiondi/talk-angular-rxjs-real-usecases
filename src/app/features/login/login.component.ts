import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `

    <form [formGroup]="form" class="card" (submit)="login()">
      <div class="card-header">
       Sign In
      </div>
      
      <div class="card-body">
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <!--Username validator Pending Icon-->
              <i class="fa fa-spinner fa-spin fa-fw"></i>
              <!--Username valid / invalid icon-->
              <i 
                class="fa"
                [ngClass]="{
                  'fa-check': form.get('username').valid,
                  'fa-exclamation-circle': form.get('username').invalid
                }"
              ></i>
            </div>
          </div>
          <!--Username Input-->
          <input
            type="text" formControlName="username"
            class="form-control"
            [ngClass]="{'is-invalid': form.get('username').invalid && form.dirty}"
            placeholder="username"
          >
        </div>

        <!--Password Input-->
        <div class="input-group mb-2">
          <input 
            type="password" formControlName="password" 
            class="form-control" placeholder="password">
        </div>
        
        <button
          [disabled]="form.invalid || form.pending"
          class="btn btn-primary btn-block"
        >Sign In</button>
      </div>
    </form>
  `,
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private route: Router,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      username: ['Fabio', Validators.required],
      password: ['a12345a6', Validators.required],
    });
  }

  login(): void {
    const { username, password } = this.form.value;
    this.authService.login(username, password);
  }
}
