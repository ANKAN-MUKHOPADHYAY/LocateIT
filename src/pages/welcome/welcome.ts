import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/*import { AlertController } from 'ionic-angular';*/
import { HttpServiceProvider } from '../../providers/http-service/http-service';


@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  currentItems: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restService: HttpServiceProvider) {
    console.log(this.navCtrl);
  }

  getCourses(ev) {
      console.log(ev);
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
  locationSearch(){
    this.navCtrl.push('SelectLocationPage');
  }
  openItem(item) {
    this.navCtrl.push('SelectLocationPage', {
      selectedCourse : item
    });
  }

}
