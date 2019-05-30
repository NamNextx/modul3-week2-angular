import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-service-one',
  templateUrl: './service-one.component.html',
  styleUrls: ['./service-one.component.css']
})

@Injectable()

export class ServiceOneComponent implements OnInit {
  dataUrl = 'http://www.mocky.io/v2/5cee0cf43000000f386e9858';

  constructor(private http: HttpClient) {
  }

  getIp() {
    return this.http.get(this.dataUrl);
  }

  ngOnInit() {
  }

}
