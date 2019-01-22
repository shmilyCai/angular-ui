
import { SystemComponent } from './system.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';

export const systemRoutes = [{
  path: '',
  component:SystemComponent,
  children: [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'user', component: UserComponent },
    { path: 'role', component: RoleComponent },
   ]
}];
