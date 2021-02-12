import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AuthInteceptor } from './core/auth/auth.interceptor';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar.component';

import { UsersComponent } from './features/users/users.component';
import { LoginComponent } from './features/login/login.component';
import { MeteoComponent } from './features/meteo/meteo.component';
import { DemoAsyncPipeComponent } from './features/demo-async-pipe/demo-async-pipe.component';
import { UsersDetailsComponent } from './features/users-details/users-details.component';

import { GetRoleNamePipePipe } from './shared/pipes/role-name.pipe';
import { IfRoleDirective } from './core/auth/if-role.directive';
import { IfLoggedDirective } from './core/auth/if-logged.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // Features
    UsersComponent,
    LoginComponent,
    MeteoComponent,
    DemoAsyncPipeComponent,
    UsersDetailsComponent,
    // Directives
    IfLoggedDirective,
    IfRoleDirective,
    // Pipe
    GetRoleNamePipePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInteceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
