import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {
	fileToUpload: File = null;
	info : string = "Personal";

  userinfo : { u_fname : string, u_lname : string, u_dob : string, u_email : string, u_mobile : string}={u_fname : '', u_lname : '', u_dob : '', u_email: '', u_mobile: ''};


  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}


}
