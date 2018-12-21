import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { SharedModule } from '../common/shared/shared.module';
import { uiRoutes } from './ui.route';

import { HeroesComponent } from '../demo/heroes/heroes.component';
import { HeroDetailComponent } from '../demo/hero-detail/hero-detail.component';
import { WidgetComponent } from '../ui/widget/widget.component';
import { UiElementComponent } from '../ui/ui-element/ui-element.component';
import { FormComponent } from '../ui/form/form.component';
import { ChartComponent } from '../ui/chart/chart.component';
import { TableComponent } from '../ui/table/table.component';
import { UiComponent } from './ui.component';

/**
 * 该模块放各种ui元素的demo展示
 * 该模块的展示结合angular-material和工作实践常用的ui展示*/
@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    WidgetComponent,
    UiElementComponent,
    FormComponent,
    ChartComponent,
    TableComponent,
    UiComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(uiRoutes)
  ],
  exports:[]
})
export class UiModule {
  // constructor( @Optional() @SkipSelf() parentModule: UiModule) {
  //   throwIfAlreadyLoaded(parentModule, 'UiModule');
  // }
}
