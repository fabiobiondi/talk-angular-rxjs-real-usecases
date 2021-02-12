import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, delay, first, mergeMap, withLatestFrom } from 'rxjs/operators';
import { iif } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthInteceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return this.authService.isLogged$
      .pipe(
        first(),
        withLatestFrom(this.authService.token$),
        mergeMap(([isLogged, tk]) => {
          return iif(
            () => isLogged && req.url.includes('localhost'),
            next.handle(req.clone({ setHeaders: { Authorization: `Bearer ${tk}` } })),
            next.handle(req)
          );
        }),
        // simulate throttling
        delay(1000),
        // error handler
        catchError(err => {
          if (err instanceof HttpErrorResponse) {
            switch (err.status) {
              case 401:
                // token expired
                break;
              default:
              case 404:
                this.authService.logout();
                break;
            }
          }
          return of(err); // or throwError
        })
      );
  }
}
