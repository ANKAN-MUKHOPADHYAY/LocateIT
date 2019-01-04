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
  gotoTerms(){
  	this.navCtrl.push('TermsConditionsPage');
  }
  gotoprivacy(){
    this.navCtrl.push('PrivacyPolicyPage');
  }
  gotoAboutUs(){
    this.navCtrl.push('AboutUsPage');
  }
}
