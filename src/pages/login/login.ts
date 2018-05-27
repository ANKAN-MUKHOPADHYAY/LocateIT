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

 	loginresp : any = {
		"status" : true,
		"message" : "User Account Already Exist",
		"result": {
			"user_id" : 22
		}
	};

	enquiryresp : any ={
		"status" : false,
		"message" : "User doesn't have any enquiry",
	}

	constructor(public navCtrl: NavController, public navParams: NavParams, public _restservice: HttpServiceProvider) {
	}

	
	gotoSignup(){
		this.navCtrl.push('SignupPage');
	}

  	dologinProcess(data){
		console.log(this.logininfo);
		this._restservice.post('/user/loginCandidate',JSON.stringify(this.logininfo)).then( response => {
			console.log(response);
			if(response.status){
        sessionStorage.setItem('userid',response.result.user_id);
				console.log('Login Successful');
				this._restservice.get('/user/userenquiries/'+response.result.user_id).then( resp => {
					console.log(resp);
					if(resp.status == true){
						sessionStorage.setItem('enquiry',resp.result[0].enquiry_id);
						this.navCtrl.push('MainPage');
					} else {
						this.navCtrl.push('WelcomePage');
					}
				});
			} else {
				alert(response.message);
			}
		});
		/*console.log(this.loginresp);
		if(this.loginresp.status){
			sessionStorage.setItem('userid',this.loginresp.result.user_id);
			console.log(this.loginresp.message);
			if(this.enquiryresp.status == true){
				this.navCtrl.push('MainPage');
			} else {
				console.log(this.enquiryresp.message);
				console.log("create enquiry id first");
				this.navCtrl.push('WelcomePage');
			}
		}*/
	}
}
