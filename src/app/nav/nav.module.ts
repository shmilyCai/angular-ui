import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module'

import { NavComponent } from './nav';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    AppRoutingModule,
    MaterialModule
  ],
  exports: [NavComponent],
  providers: []
})
export class NavModule { }
