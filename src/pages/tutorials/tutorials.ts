import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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
