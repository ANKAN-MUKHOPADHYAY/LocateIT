var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { GlobalProvider } from '../../providers/global/global';
/**
 * Generated class for the InstituteLandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InstituteLandingPage = /** @class */ (function () {
    function InstituteLandingPage(navCtrl, navParams, _restservice, _global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._restservice = _restservice;
        this._global = _global;
        //console.log(this.navParams.data);
        this._global.dashboardActiveComponent = "inst-info";
    }
    InstituteLandingPage.prototype.ionViewDidLoad = function () {
        this.navParamType = typeof (this.navParams.data);
        if (this.navParamType === Number) {
            this.restUrl = '/institute/getInstituteInformation/' + this.navParams.data;
        }
        else {
            this.restUrl = '/institute/getInstituteInformation/' + sessionStorage.getItem('instlooking');
        }
        this.getData();
    };
    InstituteLandingPage.prototype.getData = function () {
        var _this = this;
        this._restservice.get(this.restUrl).then(function (res) {
            _this.instituteInfos = res.response;
            //console.log(this.instituteInfos);
        });
    };
    InstituteLandingPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-institute-landing',
            templateUrl: 'institute-landing.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HttpServiceProvider, GlobalProvider])
    ], InstituteLandingPage);
    return InstituteLandingPage;
}());
export { InstituteLandingPage };
//# sourceMappingURL=institute-landing.js.map