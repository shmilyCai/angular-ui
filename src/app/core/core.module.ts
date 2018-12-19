import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { throwIfAlreadyLoaded } from './module-import-guard';

import { HeroesComponent } from '../heroes/heroes.component';
import { ContentComponent } from '../content/content.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessagesComponent } from '../messages/messages.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { WidgetComponent } from '../widget/widget.component';
import { UiElementComponent } from '../ui-element/ui-element.component';
import { FormComponent } from '../form/form.component';
import { ChartComponent } from '../chart/chart.component';
import { TableComponent } from '../table/table.component';


/**未使用*/

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
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
