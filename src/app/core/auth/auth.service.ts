import { Injectable } from '@angular/core';
import { root } from 'rxjs/internal-compatibility';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

  token$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private http: HttpClient) {
  }

  login(): void {
    this.http.get<any>('https://my-json-server.typicode.com/marco7403/repo/login')
      .subscribe(res => {
        this.token$.next(res.token);
      });
  }

  logout(): void {
    this.token$.next(null);
  }

  get isLogged$(): Observable<boolean> {
    return this.token$.pipe(
      map(value => !!value)
    );
  }
}
