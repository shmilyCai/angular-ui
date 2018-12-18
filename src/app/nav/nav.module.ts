import { NgModule } from '@angular/core';
import { CustomMaterialModuleModule } from '../custom-material-module/custom-material-module.module'

import { NavComponent } from './nav';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    AppRoutingModule,
    CustomMaterialModuleModule
  ],
  exports: [NavComponent],
  providers: []
})
export class NavModule { }
