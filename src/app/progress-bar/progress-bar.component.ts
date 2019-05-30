import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor = '#d9d9d9';
  @Input() progressColor = '#4CAF50';
  @Input() withInput = '20';
  dataInput;

  constructor() {
  }

  ngOnInit() {
    this.dataInput = {
      backgroundColor: this.progressColor,
      width: this.withInput + '%'
    };
  }


}
