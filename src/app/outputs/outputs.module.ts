import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutputsRoutingModule } from './outputs-routing.module';
import { OutputHomeComponent } from './output-home/output-home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OutputHomeComponent],
  imports: [
    CommonModule,
    OutputsRoutingModule,
    SharedModule
  ]
})
export class OutputsModule { }
