import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
/**
 * Generated class for the SelectLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-location',
  templateUrl: 'select-location.html',
})
export class SelectLocationPage {
  locations: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restService: HttpServiceProvider) {
  }

  getLocation(loc){
  	let val = loc.target.value;
      if (!val || !val.trim()) {
        this.locations = [];
        return;
      }
      this.restService.get('/search/searchlocations/'+val).then(data => {
        if(data.status){
          this.locations = data.response;
          console.log(this.locations);
        }
      });
  }

}
