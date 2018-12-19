import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module'

import { HeaderComponent } from './header';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    MaterialModule
  ],
  exports: [HeaderComponent],
  providers: []
})
export class HeaderModule { }
