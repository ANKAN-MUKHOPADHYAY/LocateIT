import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-terms-conditions',
  templateUrl: 'terms-conditions.html',
})
export class TermsConditionsPage {
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('https://api.myjson.com/bins/ys4i8').map(res => res.json()).subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsConditionsPage');
  }
}
