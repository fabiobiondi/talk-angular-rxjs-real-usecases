import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../model/user';
import { Role } from '../../model/role';

export interface Member {
  id: number;
  name: string;
  roleName: string;
}

@Component({
  selector: 'app-admin',
  template: ` 
    <h1>User List</h1>
    <pre>Goal: Multiple XHR with mapping</pre>
    
    <!--User List-->
    <li 
      class="list-group-item list-group-item-action"
      *ngFor="let member of members" 
      [routerLink]="'/users/' + member.id"
    >
      {{member.name}} - {{member.roleName}}
    </li>
    
    <!--Footer message-->
    <div class="mt-3" *ngIf="members; else spinner">
      Click user to see details
    </div>
    
    <!--spinner-->
    <ng-template #spinner>
      <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
    </ng-template>
  `,
})
export class UsersComponent {
  members: Member[];

  constructor(private http: HttpClient) {
    forkJoin({
      users: this.http.get<User[]>('http://localhost:3000/users'),
      roles: this.http.get<Role[]>('http://localhost:3000/roles'),
    })
      .pipe(
        map((result) => result.users.map(u => ({
            id: u.id,
            name: u.name,
            roleName: result.roles.find(r => r.id === u.roleId).roleName
          })
        ))
      )
      .subscribe(result => this.members = result);
  }
}
