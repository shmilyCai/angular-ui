import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../common/shared/shared.module';
import { RouterModule } from '@angular/router';

import { dashboardRoutes } from './dashboar.route';

import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from '../demo/hero-search/hero-search.component';
import { MessagesComponent } from '../messages/messages.component';

import { HeroService } from '../service/hero.service';

/**
 * dashboard组件*/
@NgModule({
  declarations: [
    DashboardComponent,
    HeroSearchComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  exports:[]
})
export class DashboardModule {

}
