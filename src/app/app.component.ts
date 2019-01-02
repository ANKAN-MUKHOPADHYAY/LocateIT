import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Device } from '@ionic-native/device';
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpServiceProvider } from '../providers/http-service/http-service';
//import { SettingsProvider } from './../providers/settings/settings';



import { TutorialsPage } from '../pages/tutorials/tutorials';
import { WelcomePage } from '../pages/welcome/welcome';
import { EnquiryhistoryPage } from '../pages/enquiryhistory/enquiryhistory';
import { ProfilePage } from '../pages/profile/profile';
import { AboutUsPage } from '../pages/about-us/about-us';
import { SalesDashboardPage } from '../pages/sales-dashboard/sales-dashboard';
import { AdminAddOpsPage } from '../pages/admin-add-ops/admin-add-ops';
import { TermsConditionsPage } from '../pages/terms-conditions/terms-conditions';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { SplashScreenPage } from '../pages/splash-screen/splash-screen';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = TutorialsPage ;
  selectedTheme: String;
  
  NormalView: Array<{ title: string, component: any }>;
  SalesView: Array<{ title: string, component: any }>;
  AdminView: Array<{ title: string, component: any }>;
  LoginView: Array<{ title: string, component: any }>;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, private device: Device, public statusBar: StatusBar, public splashScreen: SplashScreen, public modalCtrl: ModalController, public _restservice: HttpServiceProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      if(this.device.uuid != null){
        let splash = modalCtrl.create(SplashScreenPage);
        splash.present();
        
        //const browser = this.iab.create('https://ionicframework.com/');
        //browser.show();
      }
      
          // alert('Device Model: '+this.device.model);
          // alert('Manufacturar: '+this.device.manufacturer);
          // alert('Serial No: ' +this.device.serial);
          // alert('UUID: '+this.device.uuid);
    });
    
    
    
    
    this.NormalView = [
      { title: 'About Us', component: AboutUsPage },
      { title: 'Create New Enquiry', component: WelcomePage },
      { title: 'Terms & Conditions', component: TermsConditionsPage },
      { title: 'Privacy Policy', component: PrivacyPolicyPage }
    ];

    this.SalesView = [
      { title: 'About Us', component: AboutUsPage },
      { title: 'Dashboard', component: SalesDashboardPage },
      { title: 'Edit Profile', component: ProfilePage }
    ];


    this.AdminView = [
      { title: 'About Us', component: AboutUsPage },
      { title: 'Edit Profile', component: ProfilePage },
      { title: 'Admin Dashboard', component: AdminAddOpsPage }
    ];

    this.pages = this.NormalView;
    if(sessionStorage.getItem('userType') === "SALESAGENT"){
      this.pages = this.SalesView;
    }

    this._restservice.get('/user/userinfo/' + sessionStorage.getItem('userid')).then( res => {
       if(res.status == true){
        this.LoginView = [
          { title: 'About Us', component: AboutUsPage },
          { title: 'Create New Enquiry', component: WelcomePage },
          { title: 'Edit Profile', component: ProfilePage },
          { title: 'Enquiry Page', component: EnquiryhistoryPage },
          { title: 'Terms & Conditions', component: TermsConditionsPage },
          { title: 'Privacy Policy', component: PrivacyPolicyPage }
        ];
       }
     });
      
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
