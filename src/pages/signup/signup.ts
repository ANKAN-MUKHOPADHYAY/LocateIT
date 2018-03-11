import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
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
	userinfo : { u_fname : string, u_lname: string, u_Iname: string, u_mobile: string,u_altmobile: string, u_email: string, u_type: string} = { u_fname : '', u_lname: '', u_Iname:'', u_mobile: '',u_altmobile: '', u_email: '', u_type: ''};

	constructor(public navCtrl: NavController, public navParams: NavParams, public _restService: HttpServiceProvider) {
	}

	doSignupProcess(data){
		console.log(this.userinfo);	
		this.userinfo.u_type = "Student";
		this._restService.post('/user/adduser',JSON.stringify(this.userinfo)).then(res => {
			if(res.status){
				this.navCtrl.push('LoginPage');
			}
      });
	}

}
