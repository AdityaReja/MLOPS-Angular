import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleDividerComponent } from './title-divider/title-divider.component';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [TitleDividerComponent, PageHeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[
    TitleDividerComponent,
    PageHeaderComponent
  ]
})
export class SharedModule { }
