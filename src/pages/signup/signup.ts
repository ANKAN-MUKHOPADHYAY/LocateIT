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
	userinfo : { u_fname : string, u_lname: string, u_Iname: string, u_mobile: string,u_altmobile: string, u_email: string, u_type: string,u_password: string} = { u_fname : '', u_lname: '', u_Iname:'', u_mobile: '',u_altmobile: '', u_email: '', u_type: '',u_password: ''};

	userdetail:{u_id : string, u_cid : string, u_lid : string} ={u_id : '', u_cid : '', u_lid : ''};

	constructor(public navCtrl: NavController, public navParams: NavParams, public _restService: HttpServiceProvider) {
		console.log(this.navParams);
	}

	doSignupProcess(data){
		console.log(this.userinfo);	
		this.userinfo.u_type = "Student";
		this._restService.post('/user/adduser',JSON.stringify(this.userinfo)).then(res => {
			console.log(res);
			this.userdetail.u_id = res.result.user_id;

			if(this.navParams.data.hasOwnProperty('selectedLocation') && this.navParams.data.hasOwnProperty('selectedCourse')){

				this.userdetail.u_cid = this.navParams.data.selectedCourse.id;
				this.userdetail.u_lid = this.navParams.data.selectedLocation.id;	
				this._restService.post('/user/userenquiry',JSON.stringify(this.userdetail)).then(resp => {
						console.log(resp);
						if(resp.status){
							sessionStorage.setItem('enquiry', resp.result.enquiry_id);
							this.navCtrl.push('MainPage');
						}
					});						
			} else {
				this.navCtrl.push('LoginPage');
			}
			
      });
	}

}
