import {Component, VERSION, Version} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
    </div>
    <h2>Here are some links to help you start: </h2>
    <div>
      <button mat-button routerLink="/" color="primary">Home</button>
      <button mat-button routerLink="/a" color="primary">Load A Module</button>
      <button mat-button routerLink="/a/aa" color="primary">Load AA Module</button>
    </div>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'ie11-demo' + VERSION.full;
}
