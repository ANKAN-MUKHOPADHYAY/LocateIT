import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TutorialsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorials',
  templateUrl: 'tutorials.html',
})
export class TutorialsPage {
	gotoWelcome(){
		this.navCtrl.push('WelcomePage');
	}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Welcome() {
  	this.navCtrl.push('WelcomePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialsPage');
  }

}
