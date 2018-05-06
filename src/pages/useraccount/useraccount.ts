import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UseraccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-useraccount',
  templateUrl: 'useraccount.html',
})
export class UseraccountPage {
	userData: any = {
		user_currentpassword: "",
		user_newpassword: "",
		user_verifypassword: "" 
	};

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	
	}
	
	updatePwd(data){
		console.log(this.userData);
	}
  	
}