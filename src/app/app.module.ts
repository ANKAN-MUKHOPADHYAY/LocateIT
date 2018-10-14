import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { EnquiryhistoryPageModule } from '../pages/enquiryhistory/enquiryhistory.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { AboutUsPageModule } from '../pages/about-us/about-us.module';
import { TutorialsPage } from '../pages/tutorials/tutorials';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { GlobalProvider } from '../providers/global/global';

import { HeaderModule } from '../components/header/header.module';
import { FooterModule } from '../components/footer/footer.module';
import { InNewsModule } from '../components/in-news/in-news.module';

import { Chart } from 'chart.js';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { SettingsProvider } from '../providers/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    TutorialsPage
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
    HttpClientModule,
    AboutUsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TutorialsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpServiceProvider,
    GlobalProvider,
    SettingsProvider,
  ]
})
export class AppModule {}
