import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/*import { AlertController } from 'ionic-angular';*/
import { HttpServiceProvider } from '../../providers/http-service/http-service';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  currentItems: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restService: HttpServiceProvider) {
  }

  getCourses(ev) {
      let val = ev.target.value;
      if (!val || !val.trim()) {
        this.currentItems = [];
        return;
      }
      this.restService.get('/search/searchcourses/'+val).then(data => {
        if(data.status){
          this.currentItems = data.response;
          console.log(this.currentItems);
        }
      });
  }

  gotoLogin(){
  	this.navCtrl.push('LoginPage');
  }
  gotoSignup(){
  	this.navCtrl.push('SignupPage');
  }
  locationSearch(){
    this.navCtrl.push('SelectLocationPage');
  }

}
