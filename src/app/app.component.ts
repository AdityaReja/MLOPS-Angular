import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  segment : string = 'Video'
  uploadVideo: boolean = false;
  srcVideo: string;

  title = 'MLOPS-Angular';
  onClick(event) {
    this.segment = event.target.innerText;
  }

  videoUploaded(event) {
    this.uploadVideo = event;
  }

  srcVideoLocation(event) {
    this.srcVideoLocation = event;
  }
  loadComp=false;
  constructor (private router:Router) { }
  onLogin(){
    this.loadComp = true;
  }

  toDisplay(){
    return this.loadComp===false? 'visible' : 'hidden';
  }

}
