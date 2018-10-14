import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsProvider } from './../providers/settings/settings';



import { TutorialsPage } from '../pages/tutorials/tutorials';
import { WelcomePage } from '../pages/welcome/welcome';
import { EnquiryhistoryPage } from '../pages/enquiryhistory/enquiryhistory';
import { ProfilePage } from '../pages/profile/profile';
import { AboutUsPage } from '../pages/about-us/about-us';
import { SalesDashboardPage } from '../pages/sales-dashboard/sales-dashboard';
import { AdminAddOpsPage } from '../pages/admin-add-ops/admin-add-ops';

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


  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private settings: SettingsProvider) {
    
    this.initializeApp();
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);


    // used for an example of ngFor and navigation
    this.NormalView = [
      { title: 'About Us', component: AboutUsPage },
      { title: 'Create New Enquiry', component: WelcomePage },
      { title: 'Edit Profile', component: ProfilePage },
      { title: 'Enquiry Page', component: EnquiryhistoryPage }
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
