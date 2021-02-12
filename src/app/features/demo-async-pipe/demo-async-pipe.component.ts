import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../model/user';

@Component({
  selector: 'app-users',
  template: `
<pre>
Goal: Get role name 
by async pipe
</pre>

    <!--user list-->
    <ng-container *ngIf="users | async as users; else pendingList">
      <li
        class="list-group-item"
        *ngFor="let user of users; let i = index"
      >
        {{user.name}}

        <!--get user role with async pipe-->
        <span *ngIf="user.roleId | roleNamePipe: i | async as role; else pendingRole">
          (<em>{{role}}</em>)
        </span>

        <!-- role spinner-->
        <ng-template #pendingRole>
          <i class="fa fa-spinner fa-spin fa-fw"></i>
        </ng-template>

      </li>
    </ng-container>

    <!--user list pending-->
    <ng-template #pendingList>
      <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
    </ng-template>

  `,
})
export class DemoAsyncPipeComponent {
  users: Observable<User[]>;

  constructor( private http: HttpClient ) {
    this.users = this.http.get<User[]>('http://localhost:3000/users');
  }

}
