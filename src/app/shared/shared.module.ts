import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

/**未使用*/

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MaterialModule
  ]
})
export class SharedModule { }
