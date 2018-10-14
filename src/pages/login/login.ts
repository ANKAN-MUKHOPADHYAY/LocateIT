import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { AlertController } from 'ionic-angular';
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
	logininfo: { i_loginparams: string, i_password: string, device_type: string } = { i_loginparams: '', i_password: '', device_type: '' }
	/*loginresp: any = {
		"status": true,
		"message": "User Account Already Exist",
		"result": {
			"user_id": 22
		}
	};
	enquiryresp: any = {
		"status": false,
		"message": "User doesn't have any enquiry",
	}*/

	constructor(public navCtrl: NavController, public navParams: NavParams, public _restservice: HttpServiceProvider, private alertCtrl : AlertController) {
	}

	gotoSignup() {
		//this.navCtrl.push('SignupPage');
	}

	OptionSignupPage() {
		this.navCtrl.push('OptionSignupPage');
	}

	getPlatformType() {
		if(navigator.userAgent.match(/mobile/i)) {
		  return 'ANDROID';
		} else if (navigator.userAgent.match(/iPad|Touch/i)) {
		  return 'TABLET';
		} else if (navigator.userAgent.match(/iPhone|iPod/i)) {
			return 'iOS';
		} else {
		  return 'WEB';
		}
	}

	presentConfirm(msg) {
		let alert = this.alertCtrl.create({
		  title: 'Confirm',
		  message: msg,
		  buttons: [
			{
			  text: 'Ok',
			  handler: () => {
			  }
			}
		  ]
		});
		alert.present();
	}


	dologinProcess(data) {
		//console.log(this.logininfo);
		this.getPlatformType();
		this.logininfo.device_type = this.getPlatformType();
		this._restservice.post('/loginCandidate', JSON.stringify(this.logininfo)).then(response => {
			console.log(response);
			if (response.status && response.result.hasOwnProperty('ACCESS_TOKEN')) {
				sessionStorage.setItem('accessToken', response.result.ACCESS_TOKEN);
				sessionStorage.setItem('userType', response.result.LOC_USER_TYPE);
				if (response.result.LOC_USER_TYPE === "ADMIN") {
					this.navCtrl.push('AdminAddOpsPage');
				} else if(response.result.LOC_USER_TYPE === "SALESAGENT") {
					this.navCtrl.push('SalesAgentPage');
				} else {
					sessionStorage.setItem('userid', response.result.LOC_USER_ID);
					console.log('Login Successful');
					this._restservice.get('/user/userenquiries/' + response.result.LOC_USER_ID).then(resp => {
						console.log(resp);
						if (resp.status == true) {
							sessionStorage.setItem('enquiry', resp.result[0].LOC_ENQ_ID);
							this.navCtrl.push('MainPage');
						} else {
							this.navCtrl.push('WelcomePage');
						}

					});
				}
			} else {
				this.presentConfirm(response.message +" Kindly register with us.");
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
