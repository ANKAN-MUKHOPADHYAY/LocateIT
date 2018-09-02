import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar } from 'ionic-angular';
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
  @ViewChild('search') searchBar: Searchbar;

  locations: any;
  userdetail:{u_id : string, u_cid : string, u_lid : string} ={u_id : '', u_cid : '', u_lid : ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public restService: HttpServiceProvider) {
    console.log(this.navParams);
  }

  focusme(){ 
    setTimeout(()=>{
      this.searchBar.setFocus();
    }, 1000);
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
          this.focusme();
          console.log(this.locations);
        }
      });
  }

  openSignUp(loc){
    if(sessionStorage.getItem('userid') == null || sessionStorage.getItem('userid') == undefined){
       this.navCtrl.push('SignupPage',{
        selectedCourse : this.navParams.data.selectedCourse,
        selectedLocation: loc
      });
    } else{
      this.userdetail.u_cid = this.navParams.data.selectedCourse.LOC_COURSE_ID;
      this.userdetail.u_id = sessionStorage.getItem('userid');
      this.userdetail.u_lid = loc.LOC_LOCATION_ID;
      this.restService.post('/user/userenquiry',JSON.stringify(this.userdetail)).then(resp => {
        console.log(resp);
        if(resp.status){
          sessionStorage.setItem('enquiry', resp.result.enquiry_id);
          this.navCtrl.push('MainPage');
        }
      });
    }
    console.log(this.userdetail);
  }

}
