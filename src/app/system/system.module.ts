import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';

import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../common/shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { systemRoutes } from './system.route';

@NgModule({
  declarations: [
    SystemComponent,
    UserComponent,
    RoleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(systemRoutes)
  ]
})
export class SystemModule { }
