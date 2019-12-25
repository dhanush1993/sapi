import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2, Output, EventEmitter, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { SpotifyAuthService } from 'projects/sapi/src/lib/spotify-auth.service';
import { SpotifyService } from 'projects/sapi/src/public-api';
import { AudioAnalysis } from 'projects/sapi/src/lib/models/audio-analysis/audio-analysis';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements AfterViewInit {


  // @Output() isLoggedIn = new EventEmitter<boolean>();
  @ViewChild('buttonHolder',{static:true}) buttonHolder: ElementRef;
  
  constructor(private auth: SpotifyAuthService){
    // this.isLoggedIn.emit(false)
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
      'playlist-read-private',
      'user-library-modify'
    ].join('%20')
    this.auth.setRedirectURI('https://localhost:4200')
    this.auth.setClientID('bdf36188307849058ad872df8c31e7aa')
    this.auth.setScope(scope)
    let button = this.auth.getAuthButton(true)
    button.classList.add("spotifyButton")
    this.buttonHolder.nativeElement.appendChild(button)
    // this.auth.loginObserver.subscribe((status: boolean)=>{
    //   this.isLoggedIn.emit(status)
    // });
  }

}
