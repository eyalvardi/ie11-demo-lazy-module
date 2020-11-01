import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  template: `
    <div style="border: 1px solid darkred">
      <h3>AA works!</h3>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
  ]
})
export class AaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
