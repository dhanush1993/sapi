import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpotifyModule } from 'projects/sapi/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SpotifyModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
