import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputMenuComponent } from './input-menu/input-menu.component';
import { AudioInputComponent } from './audio-input/audio-input.component';
import { TextInputComponent } from './text-input/text-input.component';
import { VideoInputComponent } from './video-input/video-input.component';
import { ImageInputComponent } from './image-input/image-input.component';
import { DocInputComponent } from './doc-input/doc-input.component';

const routes: Routes = [
  {
    path: '', component: InputMenuComponent,
    children: [
      { path: '', component: AudioInputComponent },
      { path: 'video', component: VideoInputComponent },
      { path: 'text', component: TextInputComponent },
      { path: 'image', component: ImageInputComponent },
      { path: 'doc', component: DocInputComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputsRoutingModule { }
