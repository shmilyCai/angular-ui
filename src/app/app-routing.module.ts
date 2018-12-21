import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }      from './login/login.component';

const routes: Routes = [
  //空路径路由，会作为默认路由
  { path: '', redirectTo: '/login', pathMatch: 'full' },
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
