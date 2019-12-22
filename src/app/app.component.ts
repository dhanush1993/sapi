import { Component, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { SpotifyAuthService } from 'projects/sapi/src/lib/spotify-auth.service'
import { SpotifyService } from 'projects/sapi/src/public-api';
import { Album } from 'projects/sapi/src/lib/models/album/album';
import { Track } from 'projects/sapi/src/lib/models/track/track';
import { AudioAnalysis } from 'projects/sapi/src/lib/models/audio-analysis/audio-analysis';
import { AudioFeatures } from 'projects/sapi/src/lib//models/audio-features/audio-features';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('buttonHolder',{static:true}) buttonHolder: ElementRef;
  isLoggedIn = false;
  constructor(private auth: SpotifyAuthService, private spotify: SpotifyService, private renderer: Renderer2){
   
  }

  ngAfterViewInit(){
    const scope = [
      'user-modify-playback-state',
      'user-read-currently-playing',
      'user-read-playback-state',
      'user-read-recently-played',
      'user-top-read',
      'streaming',
      'app-remote-control',
      'playlist-read-collaborative',
      'playlist-modify-private',
      'playlist-modify-public',
      'playlist-read-private'
    ].join('%20')
    this.auth.setRedirectURI('https://localhost:4200')
    this.auth.setClientID('bdf36188307849058ad872df8c31e7aa')
    this.auth.setScope(scope)
    this.renderer.appendChild(this.buttonHolder.nativeElement,this.auth.getAuthButton(true))
    const spotify = this.spotify
    this.auth.loginObserver.subscribe((status: boolean)=>{
      spotify.audioAnalysis('3JIxjvbbDrA9ztYlNcp3yL').then((res:AudioAnalysis)=>{
        console.log(res)
      })
    });
  }
  
}
