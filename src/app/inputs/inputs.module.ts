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
import { VideoPlayerComponent } from './video-input/video-player/video-player.component';
import { VideoFileUploadComponent } from './video-input/video-file-upload/video-file-upload.component';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import {VgOverlayPlayModule} from 'videogular2/compiled/overlay-play';
import {VgBufferingModule} from 'videogular2/compiled/buffering';
import { AudioPlayerComponent } from './audio-input/audio-player/audio-player.component';

@NgModule({
  declarations: [InputMenuComponent, AudioInputComponent, VideoInputComponent, TextInputComponent, DocInputComponent, ImageInputComponent,
  VideoPlayerComponent, VideoFileUploadComponent, AudioPlayerComponent],
  imports: [
    CommonModule,
    InputsRoutingModule,
    SharedModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ]
})
export class InputsModule { }
