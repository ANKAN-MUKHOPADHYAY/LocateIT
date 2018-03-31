import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
	public offeredInstitutes: any;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public _restservice: HttpServiceProvider) {
  	}

  ionViewDidLoad() {
    this._restservice.get('/user/searchenquiry/'+sessionStorage.getItem('enquiry')).then( res => {
  		console.log(res);
  		this.offeredInstitutes = res.response;
  		console.log(this.offeredInstitutes);
  	});
  }

  gotoInstituteLanding(inst){
    console.log(inst);
    sessionStorage.setItem('instlooking',inst.id);
    this.navCtrl.push('InstituteLandingPage',inst.id);
  }

}
