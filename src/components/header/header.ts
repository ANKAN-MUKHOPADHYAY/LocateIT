import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  loggedIn : boolean;
  userinfo : any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public _restservice: HttpServiceProvider) {
    if(sessionStorage.getItem('userid') != undefined || sessionStorage.getItem('userid') != null){
      this._restservice.get('/user/userinfo/'+sessionStorage.getItem('userid')).then( resp => {
        console.log(resp);
        this.userinfo = resp.result;
        this.loggedIn = true;
      });
    } else {
      this.loggedIn = false;
    }
  }

  gotoLogin(){
  	this.navCtrl.push('LoginPage');
  }
  gotoSignup(){
  	this.navCtrl.push('SignupPage');
  }
  gotoAccount(ev){
    //alert('WOW');
    console.log(ev);
    if(ev == "Logout"){
      sessionStorage.clear();
      this.navCtrl.push('WelcomePage');
    } else {
      this.navCtrl.push('UseraccountPage');
    } 
  }
}
