import { Component, ViewChild, AfterViewInit, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { SpotifyAuthService } from 'projects/sapi/src/lib/spotify-auth.service'
import { SpotifyService } from 'projects/sapi/src/public-api';
import { Album } from 'projects/sapi/src/lib/models/album/album';
import { Track } from 'projects/sapi/src/lib/models/track/track';
import { AudioAnalysis } from 'projects/sapi/src/lib/models/audio-analysis/audio-analysis';
import { AudioFeatures } from 'projects/sapi/src/lib//models/audio-features/audio-features';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  loginStatus: boolean
  constructor(private ref: ChangeDetectorRef, private auth: SpotifyAuthService){
    
    this.auth.loginObserver.subscribe((val:boolean)=>{
      
      this.changeLoginStatus(val)
    })
  }

  changeLoginStatus($event){
    this.loginStatus = $event
  }
  
}