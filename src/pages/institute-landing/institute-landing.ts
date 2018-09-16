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
  restUrl : any;
  navParamType : any;
  recommendUrl: any;
  

	constructor(public navCtrl: NavController, public navParams: NavParams, public _restservice: HttpServiceProvider, public _global:GlobalProvider) {
		//console.log(this.navParams.data);
    this._global.dashboardActiveComponent="inst-info";
	}

	ionViewDidLoad() {
    this.navParamType = typeof(this.navParams.data);
    if(this.navParamType === Number){
      this.restUrl = '/institute/getInstituteInformation/'+this.navParams.data;
      
		} else {
      this.restUrl = '/institute/getInstituteInformation/'+sessionStorage.getItem('instlooking');
    }
    this.recommendUrl = '/institute/recommendedInstitute/'+sessionStorage.getItem('enquiry');
    this.getData();
	}

  getData() {
    this._restservice.get(this.restUrl).then( res => {
      this.instituteInfos = res.response;
      //console.log(this.instituteInfos);
    });
    console.log(this.recommendUrl);
    this._restservice.get(this.recommendUrl).then( ress => {
      console.log(ress);
    });
  }

}
