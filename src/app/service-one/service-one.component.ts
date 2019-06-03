import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-service-one',
  templateUrl: './service-one.component.html',
  styleUrls: ['./service-one.component.css']
})

@Injectable()

export class ServiceOneComponent implements OnInit {
  dataUrl = 'http://ip-api.com/json/24.48.0.1';

  constructor(private http: HttpClient) {
  }

  getIp() {
    return this.http.get(this.dataUrl).toPromise();
  }

  ngOnInit() {
  }

}
