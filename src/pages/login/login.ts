import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 	logininfo : {i_loginparams : string, i_password: string}= {i_loginparams : '', i_password: ''}

	constructor(public navCtrl: NavController, public navParams: NavParams, public _restservice: HttpServiceProvider) {
	}

	gotoSignup(){
		this.navCtrl.push('SignupPage');
	}

  	dologinProcess(data){
		console.log(this.logininfo);	
		this._restservice.post('/institute/loginInstitute',JSON.stringify(this.logininfo)).then(logindata=> {
			console.log(logindata)
			if(logindata.status){
				alert('Login Successful');
			}
		});
	}
}	


