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
* Generated class for the UseraccountPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var UseraccountPage = /** @class */ (function () {
    function UseraccountPage(navCtrl, navParams, _restservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._restservice = _restservice;
        this.turn = {
            uid: "",
            mail: "",
            msg: "",
            call: "",
            active: ""
        };
        this.change = true;
        this.res = { "status": true, "result": { "user_id": 79, "user_first_name": "ALOO", "user_last_name": "GOBI", "user_mobile_number": 4141414141, "user_altmobile_number": 4141414141, "user_email": "ALOO.GOBI@GMAIL.COM", "user_type": "Student", "active_status": 1, "uniqueid": 6, "username": "ALOO_GOBI", "subscribe_message": 0, "subscribe_call": 0, "subscribe_mail": 0, "attr1": null } };
        this.userData = {
            user_currentpassword: "",
            user_newpassword: "",
            user_verifypassword: ""
        };
    }
    UseraccountPage.prototype.notify = function (event) {
        this.change = false;
    };
    UseraccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UseraccountPage');
        // this._restservice.get('/user/userinfo/'+sessionStorage.getItem('userid')).then( res => {
        console.log(sessionStorage.getItem('userid'));
        if (this.res.status == true) {
            console.log(this.res.status);
            this.current_username = this.res.result.username;
            console.log(this.current_username);
            if (res.result.subscribe_call == 1) {
                this.turn.call = true;
            }
            else {
                this.turn.call = false;
            }
            if (res.result.active_status == 1) {
                this.turn.active = true;
            }
            else {
                this.turn.active = false;
            }
            if (res.result.subscribe_mail == 1) {
                this.turn.mail = true;
            }
            else {
                this.turn.mail = false;
            }
            if (res.result.subscribe_message == 1) {
                this.turn.msg = true;
            }
            else {
                this.turn.msg = false;
            }
        }
        else {
            console.log("nothing to display");
        }
    };
    ;
    UseraccountPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-useraccount',
            templateUrl: 'useraccount.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HttpServiceProvider])
    ], UseraccountPage);
    return UseraccountPage;
}());
export { UseraccountPage };
updatePreference();
{
    this._restservice.put('/user/updateuserpreference', JSON.stringify(this.turn)).then(function (resp) {
    });
}
update();
{
    this._restservice.get('/user/userinfo/').then(function (res) {
        console.log(res);
    });
}
updatePwd(data);
{
    console.log(this.userData);
}
//# sourceMappingURL=useraccount.js.map