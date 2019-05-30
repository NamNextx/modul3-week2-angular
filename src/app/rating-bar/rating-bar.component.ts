import { Component, OnInit, EventEmitter, Input, OnChanges, Output, SimpleChanges  } from '@angular/core';
interface IRatingUnit {
  value: number;
  aclive: boolean;
}
@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
