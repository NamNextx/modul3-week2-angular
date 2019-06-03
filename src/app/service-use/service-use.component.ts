import {Component, OnInit} from '@angular/core';
import {ServiceOneComponent} from '../service-one/service-one.component';
import {WeatherServiceApiComponent} from '../weather-service-api/weather-service-api.component';
import {City} from '../models/City';

@Component({
  selector: 'app-service-use',
  templateUrl: './service-use.component.html',
  styleUrls: ['./service-use.component.css'],
  providers: []
})
export class ServiceUseComponent implements OnInit {

  constructor(private weatherService: WeatherServiceApiComponent, private getIpService: ServiceOneComponent) {

  }

  myData: City;

  ngOnInit() {

    this.getIpService.getIp().then(ip => {
      console.log(ip);
    });

    this.weatherService.getWeather('SaiGon').then(city => {
      this.myData = city;
    });
  }

}
