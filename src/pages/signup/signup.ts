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
	userinfo : { u_fname : string, u_lname: string, u_Iname: string, u_mobile: string,u_altmobile: string, u_email: string} = { u_fname : '', u_lname: '', u_Iname:'', u_mobile: '',u_altmobile: '', u_email: ''};

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

}
