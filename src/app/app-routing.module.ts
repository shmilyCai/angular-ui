import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { WidgetComponent }   from './widget/widget.component';
import { UiElementComponent }   from './ui-element/ui-element.component';
import { FormComponent }   from './form/form.component';
import { ChartComponent }   from './chart/chart.component';
import { TableComponent }   from './table/table.component';

import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }      from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  /*heros  demo*/
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },

  /*page router*/
  { path: 'dashboard', component: DashboardComponent },
  { path: 'widget', component: WidgetComponent },
  { path: 'ui', component: UiElementComponent },
  { path: 'form', component: FormComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'table', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
