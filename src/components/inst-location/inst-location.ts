import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

@Component({
  selector: 'inst-location',
  templateUrl: 'inst-location.html'
})
export class InstLocationComponent {

  showDesc=[];
  locations: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _restservice: HttpServiceProvider) {
    //console.log('Hello InstLocationComponent Component');
    this.showDesc.push(false);
    //console.log(this.locations);
    this.institutePrefferedLocation();
  }

  showDescription(index,button){
    this.showDesc[index]=button;
  }

  institutePrefferedLocation() {
    if(typeof(this.navParams.data) == Number){
      this.restUrl = '/institute/getInstituteInformation/'+this.navParams.data;
		} else {
      this.restUrl = '/institute/getInstituteInformation/'+sessionStorage.getItem('instlooking');
		}
    this.getData();
  }

  getData() {
    this._restservice.get(this.restUrl).then( res => {
      this.locations = res.response[0].location;
      //console.log(this.instituteInfos);
    });
  }

}
