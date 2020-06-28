import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputsRoutingModule } from './inputs-routing.module';
import { InputMenuComponent } from './input-menu/input-menu.component';
import { AudioInputComponent } from './audio-input/audio-input.component';
import { VideoInputComponent } from './video-input/video-input.component';
import { TextInputComponent } from './text-input/text-input.component';
import { DocInputComponent } from './doc-input/doc-input.component';
import { ImageInputComponent } from './image-input/image-input.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [InputMenuComponent, AudioInputComponent, VideoInputComponent, TextInputComponent, DocInputComponent, ImageInputComponent],
  imports: [
    CommonModule,
    InputsRoutingModule,
    SharedModule
  ]
})
export class InputsModule { }
