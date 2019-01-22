import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { MaterialModule } from '../material/material.module';
import { layoutRoutes } from './layout.route';
import { SharedModule } from '../common/shared/shared.module';

import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

/**
 * 整个项目的布局组件*/
@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    LayoutComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild(layoutRoutes)
  ],
  exports:[]
})
export class LayoutModule { 
 
}
