import { Injectable } from '@angular/core';

import axios, { AxiosPromise } from 'axios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError,tap,map } from 'rxjs/operators';

@Injectable()
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  

  getWeather(place: string = 'Vellore'): Observable<object> {
    return this.http.get<object>(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${place}%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`)
      .pipe(
        tap((response) => console.log(response)),
        catchError((error) => console.error(error))
      )
  }

}
