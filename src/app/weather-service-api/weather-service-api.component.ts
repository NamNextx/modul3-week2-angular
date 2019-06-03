import {Component, Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {City} from '../models/City';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-weather-service-api',
  templateUrl: './weather-service-api.component.html',
  styleUrls: ['./weather-service-api.component.css']
})

@Injectable()
export class WeatherServiceApiComponent implements OnInit {
  constructor(private weatherService: HttpClient) {}

  getWeather(cityName: string): Promise<City> {
    const apiURL: string = 'https://api.openweathermap.org/data/2.5/weather?&appid=0bcda31ce71e90fedd09b6b21bfb714e&q=' + cityName;
    return this.weatherService.get<City>(apiURL).toPromise();
  }


  ngOnInit() {

  }

}
