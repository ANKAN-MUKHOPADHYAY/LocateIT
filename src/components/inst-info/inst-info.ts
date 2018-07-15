import { Component, Input, Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

/**
 * Generated class for the InstInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'inst-info',
  templateUrl: 'inst-info.html'
})
@Injectable()
export class InstInfoComponent {
  about: any;
  information: any;
  restUrl: any;
  navParamType : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _restservice: HttpServiceProvider) {
    this.navParamType = typeof(this.navParams.data);
    this.instituteInfomarion();
  }
  instituteInfomarion() {
    if(this.navParamType === Number){
      this.restUrl = '/institute/getInstituteInformation/'+this.navParams.data;
		} else {
      this.restUrl = '/institute/getInstituteInformation/'+sessionStorage.getItem('instlooking');
		}
    this.getData();
  }

  getData() {
    this._restservice.get(this.restUrl).then( res => {
      this.about = res.response[0].LOC_INST_ABOUT;
      this.information = res.response[0].LOC_INST_DESC;
      //console.log(this.information);
      //console.log(this.instituteInfos);
    });
  }

}
