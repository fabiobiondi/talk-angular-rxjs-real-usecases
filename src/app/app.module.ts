import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {AdminComponent} from './features/admin/admin.component';
import {LoginComponent} from './features/login/login.component';
import {HomeComponent} from './features/home/home.component';
import {IfloggedDirective} from './core/auth/iflogged.directive';

import {AuthGuard} from './core/auth/auth.guard';
import {AuthInteceptor} from './core/auth/auth.interceptor';

const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent,  canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    HomeComponent,
    IfloggedDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInteceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
