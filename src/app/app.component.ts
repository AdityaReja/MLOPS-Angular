import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  loadComp=false;
  constructor (private router:Router) { }
  onLogin(){
    this.loadComp = true;
  }

  toDisplay(){
    return this.loadComp===false? 'visible' : 'hidden';
  }

}
