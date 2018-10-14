import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar } from 'ionic-angular';
/*import { AlertController } from 'ionic-angular';*/
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { SettingsProvider } from './../../providers/settings/settings';


@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})

export class WelcomePage {
  currentItems: any;
  selectedTheme: String;
  @ViewChild('si') searchBar: Searchbar;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restService: HttpServiceProvider, private settings: SettingsProvider) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);

  }

  focusme(){ 
    setTimeout(()=>{
      this.searchBar.setFocus();
    }, 1000);
  }

  getCourses(ev) {
      console.log(ev);
      let val = ev.target.value;
      if (!val || !val.trim()) {
        this.currentItems = [];
        return;
      }
      this.restService.get('/searchcourses/'+val).then(data => {
        if(data.status){
          this.currentItems = data.response;
          this.focusme();
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

  toggleAppTheme() {
    if (this.selectedTheme === 'dark-theme') {
      this.settings.setActiveTheme('light-theme');
    } else {
      this.settings.setActiveTheme('dark-theme');
    }
  }

}
