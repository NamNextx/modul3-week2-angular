import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  arrPerson = [
    {name: 'nam', age: 23},
    {name: 'Hoang', age: 34},
    {name: 'Nga', age: 23},
    {name: 'Nhat', age: 32}
  ];

  deletePerson(name: string) {
    const person = this.arrPerson.findIndex( (e) => e.name === name );
    this.arrPerson.splice(person);
  }

  constructor() {

  }

  ngOnInit() {
  }

}
