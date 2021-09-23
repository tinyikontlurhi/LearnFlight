import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  cityName = 'Pretoria';
  api = environment.weatherbit_Key;
  weatherBit = `${environment.weatherbit}city=${this.cityName}&key=${this.api}`;
  currentDate = new Date();
  constructor(private http: HttpClient) {
  }

  getCurWeather(): Observable<any> {
    return this.http.get<any>('https://api.weatherbit.io/v2.0/current?city=Pretoria&key=a9e423b4fc9d4ac89ef399f9bf9c8a5e');
  }

  getPrevMonthWeather() {
  }
  async setName(city: string) {
    this.cityName = city;
    this.weatherBit = `${environment.weatherbit}city=${this.cityName}&key=${this.api}`;
    console.log(this.weatherBit);
  }

  getLiveReport() {
    return this.http.get('http://localhost:3000/sensors/live');
  }
}
