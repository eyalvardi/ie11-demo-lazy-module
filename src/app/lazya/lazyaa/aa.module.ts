import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AaComponent} from "./aa.component";



@NgModule({
  declarations: [
      AaComponent
  ],
  imports: [
    CommonModule,
      RouterModule.forChild([
        { path: '' , component :AaComponent}
      ])
  ]
})
export class AaModule { }
