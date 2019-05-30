import {Component, OnInit} from '@angular/core';
import {ServiceOneComponent} from '../service-one/service-one.component';
import {WeatherServiceApi} from '../weather-service-api/weather-service-api';

@Component({
  selector: 'app-service-use',
  templateUrl: './service-use.component.html',
  styleUrls: ['./service-use.component.css'],
  providers: []
})
export class ServiceUseComponent implements OnInit {
  myData;

  constructor(private weatherService: WeatherServiceApi) {

  }

  ngOnInit() {
    this.weatherService.getWeather('SaiGon').then( city => {
      console.log(city.main.temp);
    });
    // this.myData = this.serviceComponent.getIp().subscribe(res => this.myData = res);
    // this.myData = JSON.stringify(this.myData);
  }

}
