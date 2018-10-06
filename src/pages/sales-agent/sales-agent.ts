import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sales-agent',
  templateUrl: 'sales-agent.html',
})
export class SalesAgentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalesAgentPage');
  }

  doSearchProcess(){
    console.log('Wow');
  }
  date : {dateto:"any",datefrom:"any",selectcity:"any"}={dateto:null,datefrom:null,selectcity:null};
  
}
