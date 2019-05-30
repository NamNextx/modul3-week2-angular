import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lean-pipes',
  templateUrl: './lean-pipes.component.html',
  styleUrls: ['./lean-pipes.component.css']
})
export class LeanPipesComponent implements OnInit {
  birdDay = new Date(2019, 1, 29);

  person = {
    name: 'nam',
    age: 1990
  }

  address = Promise.resolve('34T Hoang Dao Thuy');
  constructor() { }

  ngOnInit() {
  }

}
