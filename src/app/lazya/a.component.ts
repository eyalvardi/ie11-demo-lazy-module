import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  template: `
    <div style="border: 1px solid black">
      <h3>A works!</h3>
      <button routerLink="./aa" mat-button color="primary">Load AA</button>
      <router-outlet></router-outlet>
    </div>
    
  `,
  styles: [
  ]
})
export class AComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
