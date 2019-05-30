import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tao-component-simple';
  myName = 'Name';
  textMessage = '';
  myData = 0;

  changeValue(isAdd) {
    if (isAdd) {
      this.myData = this.myData + 1;
    } else {
      this.myData = this.myData - 1;
    }
  }

}

