import {Component} from '@angular/core';

@Component({
  templateUrl: './word.component.html',
  selector: 'app-word',
  styleUrls: ['./word.component.css']
})

export class WordComponent {
  en = 'hello';
  vn = 'xin chao';
  check = false;
  imageUrl = 'https://images.wallpapersden.com/image/wxl-pudge-butcher-dota-2_12874.jpg';
  textMessage = '';
  changeImg() {
    this.imageUrl = 'https://i.pinimg.com/originals/d6/1b/ac/d61bacf7319bacb10985d8be2d7eb145.jpg';
  }
}
