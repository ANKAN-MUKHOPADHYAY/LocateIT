import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

@Component({
  selector: 'inst-location',
  templateUrl: 'inst-location.html'
})
export class InstLocationComponent {

  showDesc=[];
  locations: any = [{
    name: "Location 1",
    desc: "Lorem Ipsum"
  },{
    name: "Location 2",
    desc: "Lorem Ipsum"
  },{
    name: "Location 3",
    desc: "Lorem Ipsum3"
  },{
    name: "Location 4",
    desc: "Lorem Ipsum4"
  },{
    name: "Sample 5",
    desc: "Lorem Ipsum5"
  }];

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
    if(this.navParams.data != undefined || this.navParams.data != null){
    console.log(this.navParams.data);
			this._restservice.get('/institute/getInstituteInformation/'+this.navParams.data).then( res => {
				console.log(res);
				this.locations = res.response[0].location;
				console.log(this.locations);
			});
		} else {
			//this.navCtrl.setRoot('MainPage');
		}
  }

}
