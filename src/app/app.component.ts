import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="text-center mt-3">
      <app-navbar></app-navbar>
    </div>
    <hr />
    <div class="container-sm mt-3 text-center page">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
