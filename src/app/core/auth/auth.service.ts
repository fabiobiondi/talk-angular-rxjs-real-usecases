import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Auth } from './auth';

@Injectable({ providedIn: 'root' })
export class AuthService {

  auth$: BehaviorSubject<Auth> = new BehaviorSubject<Auth>(null);

  constructor(
    private http: HttpClient,
  ) {
  }

  login(username: string, password: string): void {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);

    this.http.get<Auth>('http://localhost:3000/login', { params })
      .subscribe(res => {
        console.log(res)
      });
  }

  logout(): void {

  }

}
