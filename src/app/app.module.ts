import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }  from '@angular/common/http';

import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './data/in-memory-data.service';

/*import { LayoutModule } from './layout/layout.module';*/

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
 /*import { HeroesComponent } from './heroes/heroes.component';
import { ContentComponent } from './content/content.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetComponent } from './widget/widget.component';
import { UiElementComponent } from './ui-element/ui-element.component';
import { FormComponent } from './form/form.component';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { LayoutComponent } from './layout/layout.component';*/

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,

    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
