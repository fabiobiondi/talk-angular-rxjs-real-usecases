import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `

    <!--user list-->
    <ng-container>
      <li class="list-group-item">
        Nome e Cognome

        <!--get user role with async pipe-->
        <span>
          (<em>Ruolo</em>)
        </span>

        <!-- role spinner-->
        <i class="fa fa-spinner fa-spin fa-fw"></i>

      </li>
    </ng-container>

    <!--user list pending-->
    <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>

  `,
})
export class DemoAsyncPipeComponent {

}
