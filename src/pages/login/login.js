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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, _restservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._restservice = _restservice;
        this.logininfo = { i_loginparams: '', i_password: '' };
        this.loginresp = {
            "status": true,
            "message": "User Account Already Exist",
            "result": {
                "user_id": 22
            }
        };
        this.enquiryresp = {
            "status": false,
            "message": "User doesn't have any enquiry",
        };
    }
    LoginPage.prototype.gotoSignup = function () {
        this.navCtrl.push('SignupPage');
    };
    LoginPage.prototype.dologinProcess = function (data) {
        var _this = this;
        console.log(this.logininfo);
        this._restservice.post('/user/loginCandidate', JSON.stringify(this.logininfo)).then(function (response) {
            console.log(response);
            if (response.status) {
                sessionStorage.setItem('userid', response.result.user_id);
                console.log('Login Successful');
                _this._restservice.get('/user/userenquiries/' + response.result.user_id).then(function (resp) {
                    console.log(resp);
                    if (resp.status == true) {
                        sessionStorage.setItem('enquiry', resp.result[0].enquiry_id);
                        _this.navCtrl.push('MainPage');
                    }
                    else {
                        _this.navCtrl.push('WelcomePage');
                    }
                });
            }
            else {
                alert(response.message);
            }
        });
        /*console.log(this.loginresp);
        if(this.loginresp.status){
            sessionStorage.setItem('userid',this.loginresp.result.user_id);
            console.log(this.loginresp.message);
            if(this.enquiryresp.status == true){
                this.navCtrl.push('MainPage');
            } else {
                console.log(this.enquiryresp.message);
                console.log("create enquiry id first");
                this.navCtrl.push('WelcomePage');
            }
        }*/
    };
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HttpServiceProvider])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map