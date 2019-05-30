import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-struc-directive',
  templateUrl: './struc-directive.component.html',
  styleUrls: ['./struc-directive.component.css']
})
export class StrucDirectiveComponent implements OnInit {

  state = true;

  myArrData = [1, 2, 3, 4];


  onToggle() {
    this.state = !this.state;
  }


  constructor() {
  }

  ngOnInit() {
  }

}
