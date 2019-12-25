/**
 * @author Dhanush Srinivasa
 */
import { Injectable, EventEmitter } from '@angular/core';
import { NativeWindow } from './native-window.service';
import { SpotifyConstants, RESPONSE_TYPE } from './spotify-constants/spotify-constants';
import { AuthToken } from './auth-token/auth-token';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {
  
  private redirect_uri: string
  private client_id: string
  public responseType:string = RESPONSE_TYPE.TOKEN
  public scopes: string
  loginObserver: EventEmitter<boolean>;

  constructor(private windowRef: NativeWindow) {
    this.redirect_uri = this.windowRef.nativeWindow.location.href.split('#')[0]
//Check cookie for auth-token
    this.loginObserver = new EventEmitter<boolean>();
    this.windowRef.nativeWindow.loginStatus = this.loginObserver;
    this.callback()
  }

  get isLoggedIn(){
    return this.loginObserver.asObservable()
  }
  
  load(client_id: string, redirect_uri: string, scopes: string){
    this.client_id = client_id
    this.redirect_uri = redirect_uri
    this.scopes = scopes
  }

  setRedirectURI(uri : string){
    this.redirect_uri = uri
  }

  setClientID(client_id:string){
    this.client_id = client_id
  }
  
  setScope(scopes: string){
    this.scopes = scopes
  }

  callback(){
    const token = this.windowRef.nativeWindow.location.hash.substr(1).split('&')[0].split("=")[1]
    if (token) {
      try{
        this.windowRef.nativeWindow.loginStatus.emit(true)
        return this.windowRef.nativeWindow.opener.spotifyCallback(this.windowRef.nativeWindow.location)
      }catch(err){
        return false
      }
    }
    return false
  }

  getAuthButton(popup: boolean) : HTMLButtonElement{
    const button = document.createElement('button')
    button.innerHTML = 'Sign In With Spotify'
    var self = this
    if(popup){
      button.addEventListener('click', this.signInPoP.bind(null, self))
    }else{
      button.addEventListener('click',this.signIn.bind(null,self))
    }
    return button
  }

  signInPoP(self: SpotifyAuthService) {
    const uri = SpotifyConstants.PROTOCOL+SpotifyConstants.BASE_AUTH_URI;
    const AUTHORIZATION_URL = uri+'?client_id='+self.client_id+'&redirect_uri='+self.redirect_uri+'&scope='+self.scopes+'&response_type='+self.responseType;
    var popup = self.windowRef.nativeWindow.open(
      AUTHORIZATION_URL,
      'Login with Spotify',
      'width=800,height=600'
    ) 
    self.windowRef.nativeWindow.spotifyCallback = (uri: Location) => {
      popup.close()
      const token = uri.hash.substr(1).split('&')[0].split("=")[1]
      const tokenType = uri.hash.substr(1).split('&')[1].split("=")[1]
      const expires = uri.hash.substr(1).split('&')[2].split("=")[1]
      var state = '0'
      try{
        state = uri.hash.substr(1).split('&')[3].split("=")[1]
      }catch(err){
      }
      AuthToken.setInstance(token, tokenType, expires, state)
      const window = new NativeWindow()
      try{
        window.nativeWindow.loginStatus.emit(true);
      }catch(err){}
      //return authToken
    }
    self = null
  }

  signIn(self: SpotifyAuthService) {
    const uri = SpotifyConstants.PROTOCOL+SpotifyConstants.BASE_AUTH_URI;
    const AUTHORIZATION_URL = uri+'?client_id='+self.client_id+'&redirect_uri='+self.redirect_uri+'&scope='+self.scopes+'&response_type='+self.responseType;
    self.windowRef.nativeWindow.open(AUTHORIZATION_URL)
    self = null
  } 
}
