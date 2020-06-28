import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutputHomeComponent } from './output-home/output-home.component';

const routes: Routes = [
  {path: '', component: OutputHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutputsRoutingModule { }
