import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'footer',
  templateUrl: 'footer.html'
})
export class FooterComponent {

  text: string;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log('Hello FooterComponent Component');
    this.text = 'Hello World';
  }
<<<<<<< HEAD
  gotoTerms(){
  	this.navCtrl.push('TermsConditionsPage');
  }
  gotoprivacy(){
    this.navCtrl.push('PrivacyPolicyPage');
  }
=======

  gotoPrivacy(){
  	this.navCtrl.push('PrivacyPage');
  }

>>>>>>> da80c1a7f768ce51563eb3a71bb1a7476ab74b31
}
