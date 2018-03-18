import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { WeatherResultsComponent } from './weather-results/weather-results.component';
import { FahrToCelsius } from './temperature';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherResultsComponent,
    FahrToCelsius
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
