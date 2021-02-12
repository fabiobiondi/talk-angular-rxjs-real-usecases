import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user';

@Component({
  selector: 'app-users-details',
  template: `
    <pre>
Goal: get user info by
router params & XHR
    </pre>

    <!--user info-->
    <div *ngIf="userHTML as html; else spinner">
      <div [innerHTML]="html"></div>
      <button class="btn btn-primary mt-2" routerLink="/users">Back</button>
    </div>
    
    <!--spinner-->
    <ng-template #spinner>
      <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
    </ng-template>
  `,
})
export class UsersDetailsComponent {
  userHTML: string;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
    activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.http.get<User>(`http://localhost:3000/users/${id}`)),
        map(user => `<h1>${user.name}</h1> ${user.description}`)
      )
      .subscribe(html => this.userHTML = html);
  }
}
