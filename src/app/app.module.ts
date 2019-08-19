import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherStatusComponent } from './components/weather-status/weather-status.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { LogoutPageComponent } from './components/logout-page/logout-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherStatusComponent,
    WelcomePageComponent,
    LogoutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
