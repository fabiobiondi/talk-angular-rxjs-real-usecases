import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Auth, UserRoles } from './auth';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

  auth$: BehaviorSubject<Auth> = new BehaviorSubject<Auth>(null);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.auth$.next(JSON.parse(localStorage.getItem('auth')));
  }

  login(username: string, password: string): void {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);

    this.http.get<Auth>('http://localhost:3000/login', { params })
      .subscribe(res => {
        this.auth$.next(res);
        localStorage.setItem('auth', JSON.stringify(res));
        this.router.navigateByUrl('users');
      });
  }

  logout(): void {
    this.auth$.next(null);
    localStorage.removeItem('auth');
    this.router.navigateByUrl('/');
  }

  get isLogged$(): Observable<boolean> {
    return this.auth$.pipe(
      map(value => !!value)
    );
  }

  get role$(): Observable<UserRoles> {
    return this.auth$.pipe(
      map(auth => auth?.role)
    );
  }

  get token$(): Observable<string> {
    return this.auth$.pipe(
      map(auth => auth?.token)
    );
  }


  get displayName$(): Observable<string> {
    return this.auth$.pipe(
      map(auth => auth.displayName)
    );
  }
}
