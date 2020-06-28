import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartProjComponent } from './start-proj/start-proj.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { InputsModule } from './inputs/inputs.module';
import { OutputsModule } from './outputs/outputs.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
  { path: 'dashboard' , loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'inputs' , loadChildren: './inputs/inputs.module#InputsModule' },
  { path: 'outputs' , loadChildren: './outputs/outputs.module#OutputsModule' }
 /*  { path: '' , component: StartProjComponent},
  { path: '**', component: NotFoundComponent} */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
