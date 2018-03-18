import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  place: string = '';

  results: object;

  loading: boolean = false;

  constructor(private weatherService: WeatherService) { }

  getWeather(){
    this.loading = true;
    console.log('Getting Weather')
    this.weatherService.getWeather(this.place)
      .subscribe((data)=>{
        this.results = data.query.results;
        this.loading = false;
      })
  }

  ngOnInit() {
    
  }

}
