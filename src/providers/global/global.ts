import { HttpClient } from '@angular/common/http';
import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

  public dashboardActiveComponent = "inst-info";
  public tempDashboardActiveComponent="inst-info";

  constructor(public http: HttpClient, public platform: Platform) {
    console.log('Hello GlobalProvider Provider');
  }

}
