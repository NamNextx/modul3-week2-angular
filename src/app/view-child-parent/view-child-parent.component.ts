import {Component, OnInit, ViewChild} from '@angular/core';
import {ViewChildComponent} from '../view-child/view-child.component';


// @ts-ignore
@Component({
  selector: 'app-view-child-parent',
  templateUrl: './view-child-parent.component.html',
  styleUrls: ['./view-child-parent.component.css']
})
export class ViewChildParentComponent implements OnInit {

  @ViewChild(ViewChildComponent)

  myChild: ViewChildComponent;

  onChangeComponent() {
    this.myChild.dataCount = this.myChild.dataCount + 1;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
