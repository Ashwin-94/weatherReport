import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { WeatherStatusComponent } from './components/weather-status/weather-status.component';
import { LogoutPageComponent } from './components/logout-page/logout-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomePageComponent},
  { path: 'status', component: WeatherStatusComponent},
  { path: 'logout', component: LogoutPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
