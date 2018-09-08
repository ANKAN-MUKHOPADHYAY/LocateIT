import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';


@Component({
  selector: 'in-news',
  templateUrl: 'in-news.html'
})
export class InNewsComponent {

  text: string;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log('Hello InNewsComponent Component');
    this.text = 'Hello World';
  }

}
