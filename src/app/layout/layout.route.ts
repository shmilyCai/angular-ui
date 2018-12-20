import { LayoutComponent } from './layout.component';

export const layoutRoutes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule'
      }
    ]
  }
];
