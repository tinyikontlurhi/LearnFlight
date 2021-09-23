import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'app-weather-header',
  templateUrl: './weather-header.component.html'
})

export class WeatherheaderComponent implements OnInit {

  weather: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getCurWeather().subscribe(data => {
      this.weather = data.data[0];
      console.log(data);
    });
  }
}
