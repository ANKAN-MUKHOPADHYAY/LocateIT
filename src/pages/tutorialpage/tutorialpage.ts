import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

/**
 * Generated class for the TutorialpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorialpage',
  templateUrl: 'tutorialpage.html',
})
export class TutorialpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public _restservice: HttpServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialpagePage');
  }
  gotoWelcome(){
  	this.navCtrl.push('WelcomePage');
  }
}
