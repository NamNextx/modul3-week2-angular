import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Output() myClick = new EventEmitter<boolean>();

  addData() {
    this.myClick.emit(true);
  }

  subData() {
    this.myClick.emit(false);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
