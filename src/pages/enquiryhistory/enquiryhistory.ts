import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

/**
* Generated class for the EnquiryhistoryPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
	selector: 'page-enquiryhistory',
	templateUrl: 'enquiryhistory.html',
})
export class EnquiryhistoryPage {
	oldEnquirys : Array<any>=[];
	userPreviousEnquiry : any;


	constructor(public navCtrl: NavController, public navParams: NavParams, public _restservice: HttpServiceProvider) {
	}

	ionViewDidLoad() {
		this._restservice.get('/user/oldenquiryinfo/'+sessionStorage.getItem('userid')).then( res => {
			console.log(res);
			this.userPreviousEnquiry = res.result;
			console.log(this.userPreviousEnquiry);
		});
	}
	gotoMain(item){
		console.log(item);
		this.navCtrl.push('MainPage',{
	        previousEnquiryId : item
	    });
	}
}
