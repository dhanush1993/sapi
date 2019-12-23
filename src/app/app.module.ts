import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SpotifyModule } from 'projects/sapi/src/public-api';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { ServicesAvailableComponent } from './test/services-available/services-available.component';
import { ResponseComponent } from './test/response/response.component';
import { ServiceParamsComponent } from './test/service-params/service-params.component';
import { TitlebarComponent } from './test/titlebar/titlebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    ServicesAvailableComponent,
    ResponseComponent,
    ServiceParamsComponent,
    TitlebarComponent
  ],
  imports: [
    SpotifyModule,
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
