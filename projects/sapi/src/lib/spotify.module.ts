import { NgModule } from '@angular/core';
import { SpotifyComponent } from './spotify.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [SpotifyComponent],
  imports: [
    HttpClientModule
  ],
  exports: [SpotifyComponent]
})
export class SpotifyModule { }
