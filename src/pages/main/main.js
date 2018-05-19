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
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, navParams, _restservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._restservice = _restservice;
    }
    MainPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._restservice.get('/user/searchenquiry/' + sessionStorage.getItem('enquiry')).then(function (res) {
            console.log(res);
            _this.offeredInstitutes = res.response;
            console.log(_this.offeredInstitutes);
        });
    };
    MainPage.prototype.gotoInstituteLanding = function (inst) {
        console.log(inst);
        sessionStorage.setItem('instlooking', inst.id);
        sessionStorage.setItem('trans', inst.tranx_id);
        this.navCtrl.push('InstituteLandingPage', inst.id);
    };
    MainPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-main',
            templateUrl: 'main.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HttpServiceProvider])
    ], MainPage);
    return MainPage;
}());
export { MainPage };
//# sourceMappingURL=main.js.map