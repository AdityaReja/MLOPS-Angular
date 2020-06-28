import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { VideoFileUploadComponent } from './video-file-upload/video-file-upload.component';
import { NgbdModalContent } from './video-file-upload/video-file-upload.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    AudioPlayerComponent,
    VideoFileUploadComponent,
    NgbdModalContent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
