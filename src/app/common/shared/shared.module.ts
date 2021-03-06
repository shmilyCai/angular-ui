import { NgModule } from '@angular/core';
import { HttpClientModule }  from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CommonModule } from '@angular/common';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from '../../data/in-memory-data.service';

import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from '../../material/material.module';

/**
 * 该模块放各种公共directive，provider，filter*/

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ChartsModule,
    MaterialModule
  ],
  exports:[
    ChartsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers:[]
})
export class SharedModule { }
