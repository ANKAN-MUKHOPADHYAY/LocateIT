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
  public urlData : any;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public _restservice: HttpServiceProvider) {
  	}

  ionViewDidLoad() {
    console.log(this.navParams);
    console.log(this.navParams.data.hasOwnProperty('previousEnquiryId'));
    if(this.navParams.data.hasOwnProperty('previousEnquiryId')){
       this.urlData = '/user/searchenquiry/'+this.navParams.data.previousEnquiryId;
    } else {
      this.urlData = '/user/searchenquiry/'+sessionStorage.getItem('enquiry');
    }
    console.log(this.urlData);
    this._restservice.get(this.urlData).then( res => {
  		console.log(res);
  		this.offeredInstitutes = res.response;
  		console.log(this.offeredInstitutes);
  	});
  }

  gotoInstituteLanding(inst){
    console.log(inst);
    sessionStorage.setItem('instlooking',inst.id);
    sessionStorage.setItem('trans', inst.tranx_id);
    this.navCtrl.push('InstituteLandingPage',inst.id);
  }
}
 