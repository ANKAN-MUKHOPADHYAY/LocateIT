import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { EnquiryhistoryPageModule } from '../pages/enquiryhistory/enquiryhistory.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { AboutUsPageModule } from '../pages/about-us/about-us.module';
import { TutorialsPage } from '../pages/tutorials/tutorials';
import { TermsConditionsPageModule } from '../pages/terms-conditions/terms-conditions.module';
import { PrivacyPolicyPageModule } from '../pages/privacy-policy/privacy-policy.module';


import { Device } from '@ionic-native/device';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { GlobalProvider } from '../providers/global/global';

import { HeaderModule } from '../components/header/header.module';
import { FooterModule } from '../components/footer/footer.module';
import { InNewsModule } from '../components/in-news/in-news.module';
import { SplashScreenPage } from '../pages/splash-screen/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { Chart } from 'chart.js';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
//import { SettingsProvider } from '../providers/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    TutorialsPage,
    SplashScreenPage
  ],
  imports: [
    BrowserModule,
    ProfilePageModule,
    WelcomePageModule,
    EnquiryhistoryPageModule,
    HeaderModule,
    FooterModule,
    InNewsModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    AboutUsPageModule,
    TermsConditionsPageModule,
    PrivacyPolicyPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TutorialsPage,
    SplashScreenPage
  ],
  providers: [
    Device,
    Geolocation,
    InAppBrowser,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpServiceProvider,
    GlobalProvider,
    //SettingsProvider,
  ]
})
export class AppModule {}
