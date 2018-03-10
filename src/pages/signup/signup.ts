import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
	userinfo : { u_fname : string, u_lname: string, u_mobile: string,u_altmobile: string, u_email: string} = { u_fname : 'Ankan', u_lname: 'Mukhopadhyay',u_mobile: '9916096639',u_altmobile: '8867315438', u_email: 'ankan@a.com'};

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}
}
