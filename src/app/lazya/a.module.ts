import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {AComponent} from "./a.component";



@NgModule({
  declarations: [
      AComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AComponent
      },
      {
        path: 'aa',
        component: AComponent,
        loadChildren: () => import('./lazyaa/aa.module').then(m => m.AaModule)
      }
    ]),
    MatButtonModule

  ]
})
export class AModule { }
