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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, _restService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._restService = _restService;
        this.info = "indiv";
        this.userinfo = { u_fname: '', u_lname: '', u_Iname: '', u_mobile: '', u_altmobile: '', u_email: '', u_type: '', u_password: '' };
        this.userdetail = { u_id: '', u_cid: '', u_lid: '' };
        console.log(this.navParams);
    }
    SignupPage.prototype.doSignupProcess = function (data) {
        var _this = this;
        console.log(this.userinfo);
        this.userinfo.u_type = "Student";
        this._restService.post('/user/adduser', JSON.stringify(this.userinfo)).then(function (res) {
            console.log(res);
            sessionStorage.setItem('userid', res.result.user_id);
            _this.userdetail.u_id = res.result.user_id;
            if (_this.navParams.data.hasOwnProperty('selectedLocation') && _this.navParams.data.hasOwnProperty('selectedCourse')) {
                _this.userdetail.u_cid = _this.navParams.data.selectedCourse.id;
                _this.userdetail.u_lid = _this.navParams.data.selectedLocation.id;
                _this._restService.post('/user/userenquiry', JSON.stringify(_this.userdetail)).then(function (resp) {
                    console.log(resp);
                    if (resp.status) {
                        sessionStorage.setItem('enquiry', resp.result.enquiry_id);
                        _this.navCtrl.push('MainPage');
                    }
                });
            }
            else {
                _this.navCtrl.push('WelcomePage');
            }
        });
    };
    SignupPage.prototype.gotoLogin = function () {
        this.navCtrl.push('LoginPage', {
            selectedCourse: this.navParams.data.selectedCourse,
            selectedLocation: this.navParams.data.selectedLocation
        });
    };
    SignupPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-signup',
            templateUrl: 'signup.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HttpServiceProvider])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.js.map