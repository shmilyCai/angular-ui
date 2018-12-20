import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { throwIfAlreadyLoaded } from './module-import-guard';

import { HeroesComponent } from '../demo/heroes/heroes.component';
import { ContentComponent } from '../layout/content/content.component';
import { HeroDetailComponent } from '../demo/hero-detail/hero-detail.component';
import { MessagesComponent } from '../ui/messages/messages.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { WidgetComponent } from '../ui/widget/widget.component';
import { UiElementComponent } from '../ui/ui-element/ui-element.component';
import { FormComponent } from '../ui/form/form.component';
import { ChartComponent } from '../ui/chart/chart.component';
import { TableComponent } from '../ui/table/table.component';

/**
 * 该模块放各种ui元素的demo展示
 * 该模块的展示结合angular-material和工作实践常用的ui展示*/
@NgModule({
  declarations: [
    HeroesComponent,
    ContentComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    WidgetComponent,
    UiElementComponent,
    FormComponent,
    ChartComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  exports:[
    CommonModule,
    HeroesComponent,
    ContentComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    WidgetComponent,
    UiElementComponent,
    FormComponent,
    ChartComponent,
    TableComponent
  ]
})
export class UiModule {
  constructor( @Optional() @SkipSelf() parentModule: UiModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
