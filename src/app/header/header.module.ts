import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CustomMaterialModuleModule } from '../custom-material-module/custom-material-module.module'

import { HeaderComponent } from './header';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    CustomMaterialModuleModule
  ],
  exports: [HeaderComponent],
  providers: []
})
export class HeaderModule { }
