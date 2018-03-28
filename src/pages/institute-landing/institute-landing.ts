import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { GlobalProvider } from '../../providers/global/global';
/**
 * Generated class for the InstituteLandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-institute-landing',
  templateUrl: 'institute-landing.html',
})
export class InstituteLandingPage {
	instituteInfos : any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public _restservice: HttpServiceProvider, public _global:GlobalProvider) {
		console.log(this.navParams.data);
    this._global.dashboardActiveComponent="inst-info";
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad InstituteLandingPage');
		// if(this.navParams.data != undefined || this.navParams.data != null){
		// 	this._restservice.get('/institute/getInstituteInformation/'+this.navParams.data).then( res => {
		// 		console.log(res);
		// 		this.instituteInfos = res.response;
		// 		console.log(this.instituteInfos);
		// 	});
		// } else {
		// 	//this.navCtrl.setRoot('MainPage');
		// }

	}


}
