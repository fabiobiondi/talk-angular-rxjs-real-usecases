import {Component} from '@angular/core';

@Component({
  selector: 'app-admin',
  template: ` 
    <h1>User List</h1>
    <pre>Goal: Multiple XHR with mapping</pre>
    
    <!--User List-->
    <li 
      class="list-group-item list-group-item-action"
      [routerLink]="'/users/' + 1"
    >
     Nome - Ruolo
    </li>
    
    <!--Footer message-->
    <div class="mt-3">
      Click user to see details
    </div>
    
    <!--spinner-->
    <!--<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>-->
  `,
})
export class UsersComponent {

}
