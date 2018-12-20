import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*import { DashboardComponent }   from './dashboard/dashboard.component';
import { WidgetComponent }   from 'ui/widget/widget.component';
import { UiElementComponent }   from 'ui/ui-element/ui-element.component';
import { FormComponent }   from 'ui/form/form.component';
import { ChartComponent }   from 'ui/chart/chart.component';
import { TableComponent }   from 'ui/table/table.component';

import { HeroesComponent }      from 'core/heroes/heroes.component';
import { HeroDetailComponent }      from 'core/hero-detail/hero-detail.component';*/
import { LoginComponent }      from './login/login.component';

const routes: Routes = [
  //空路径路由，会作为默认路由
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  /*heros  core*/
 /* { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'widget', component: WidgetComponent },
  { path: 'ui', component: UiElementComponent },
  { path: 'form', component: FormComponent },
  { path: 'chart', component: ChartComponent },*/
  { path: 'login', component: LoginComponent },
  {
    path: 'shmilycai',
    loadChildren: 'src/app/layout/layout.module#LayoutModule'
  },
  // **代表该路由是一个通配符路径。如果当前URL无法匹配上我们配置过的任何一个路由中的路径，路由器就会匹配上这一个。
  // 当需要显示404页面或者重定向到其它路由时，该特性非常有用。
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
