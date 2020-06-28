import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-input',
  templateUrl: './video-input.component.html',
  styleUrls: ['./video-input.component.css']
})
export class VideoInputComponent implements OnInit {

  segment: string = 'Video'
  uploadVideo: boolean = false;
  srcVideo: string;

  title = 'MLOPS-Angular';

  constructor() { }

  ngOnInit() {
  }
  onClick(event) {
    this.segment = event.target.innerText;
  }

  videoUploaded(event) {
    this.uploadVideo = event;
  }

  srcVideoLocation(event) {
    this.srcVideoLocation = event;
  }

}
