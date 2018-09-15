import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { TutorialsPage  } from '../pages/tutorials/tutorials';
import { WelcomePage } from '../pages/welcome/welcome';
import { EnquiryhistoryPage } from '../pages/enquiryhistory/enquiryhistory';
import { ProfilePage } from '../pages/profile/profile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = TutorialsPage ;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
     this.pages = [
        { title: 'About Us', component: '' },
        { title: 'Create New Enquiry', component: WelcomePage },
        { title: 'Edit Profile', component: ProfilePage },
        { title: 'Enquiry Page', component: EnquiryhistoryPage },
        
     ];
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
