import {Component, OnInit} from '@angular/core';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  isShowForm = false;
  arrWords = [
    {id: 1, en: 'action', vn: 'hành động', memorized: true},
    {id: 2, en: 'actor', vn: 'diễn viên', memorized: false},
    {id: 3, en: 'activity', vn: 'hoạt động', memorized: true},
    {id: 4, en: 'active', vn: 'chủ động', memorized: true},
    {id: 5, en: 'bath', vn: 'tắm', memorized: false},
    {id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true}
  ];

  newEn: string = '';
  newVn: string = '';

  filterStatus = 'SEE-ALL';

  addWord() {
    this.arrWords.unshift({
      id: this.arrWords.length + 1,
      en: this.newEn,
      vn: this.newVn,
      memorized: false
    });
    this.newEn = '';
    this.newVn = '';
    this.isShowForm = false;
  }

  isCheckOption(memorized: boolean): boolean {
    const getAll = this.filterStatus === 'SEE-ALL';
    const getRemember = this.filterStatus === 'SEE-FOR-GET' && !memorized;
    const getForget = this.filterStatus === 'SEE-REMEMBER' && memorized;
    return getAll || getForget || getRemember;
  }


  isDelete(id: number): void {
    const index = this.arrWords.findIndex(word => word.id === id);
    this.arrWords.splice(index, 1);
  }

  constructor() {
  }

ngOnInit() {

}

}
