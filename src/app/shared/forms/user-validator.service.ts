import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { AsyncValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserValidatorsService {

  constructor(private http: HttpClient) {}

  uniqueName(): AsyncValidatorFn {
    return (control: FormControl): Observable<ValidationErrors> => {
      // debounce
      return timer(1000)
        .pipe(
          // check if username exits
          switchMap(() => this.http.get<any>(`http://localhost:3000/users?name=${control.value}`)),
          map(res => res.length ? null : { userNotExists: true })
        );
    };
  }}
