import { Injectable } from '@angular/core';

import axios from 'axios';

@Injectable()
export class WeatherService {

  constructor() { }

  getWeather(place: string): Promise<string> {
    return axios({
      
    })
  }
}
