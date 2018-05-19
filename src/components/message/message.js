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
import { NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
var MessageComponent = /** @class */ (function () {
    function MessageComponent(navCtrl, navParams, _restservice) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._restservice = _restservice;
        this.userMsg = { transactionid: sessionStorage.getItem('trans'), message: { from: "customer", text: '', timestamp: this.js_yyyy_mm_dd_hh_mm_ss() } };
        if (sessionStorage.getItem('trans') != "undefined" || sessionStorage.getItem('trans') != null) {
            this.getMessages();
            setInterval(function () {
                _this.getMessages();
            }, 6000);
        }
        else {
            this.messages = null;
        }
    }
    MessageComponent.prototype.getMessages = function () {
        var _this = this;
        if (sessionStorage.getItem('trans') != "undefined") {
            //console.log('IN undefined');
            this.displayMsg = true;
            this._restservice.get('/user/usermessage/' + sessionStorage.getItem('trans'), false).then(function (res) {
                _this.messages = JSON.parse(res.result);
                //console.log(this.messages);
            });
        }
        else {
            //console.log('In else ');
            this.displayMsg = false;
        }
    };
    MessageComponent.prototype.sendMessageProcess = function (data) {
        var _this = this;
        //console.log(this.userMsg);
        this._restservice.post('/institute/sendMessage', JSON.stringify(this.userMsg)).then(function (res) {
            //console.log(res);
            _this.data = {
                "from": "customer",
                "text": _this.userMsg.message.text,
                "timestamp": _this.js_yyyy_mm_dd_hh_mm_ss()
            };
            if (_this.messages == null) {
                _this.messages = [];
                _this.messages.push(_this.data);
                console.log(_this.messages);
            }
            else {
                _this.messages.push(_this.data);
            }
            _this.userMsg.message.text = '';
        });
    };
    MessageComponent.prototype.js_yyyy_mm_dd_hh_mm_ss = function () {
        this.now = new Date();
        console.log(this.now);
        this.year = "" + this.now.getFullYear();
        this.month = "" + (this.now.getMonth() + 1);
        if (this.month.length == 1) {
            this.month = "0" + this.month;
        }
        this.day = "" + this.now.getDate();
        if (this.day.length == 1) {
            this.day = "0" + this.day;
        }
        this.hour = "" + this.now.getHours();
        if (this.hour.length == 1) {
            this.hour = "0" + this.hour;
        }
        this.minute = "" + this.now.getMinutes();
        if (this.minute.length == 1) {
            this.minute = "0" + this.minute;
        }
        this.second = "" + this.now.getSeconds();
        if (this.second.length == 1) {
            this.second = "0" + this.second;
        }
        return this.year + "-" + this.month + "-" + this.day + " " + this.hour + ":" + this.minute + ":" + this.second;
    };
    MessageComponent = __decorate([
        Component({
            selector: 'message',
            templateUrl: 'message.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HttpServiceProvider])
    ], MessageComponent);
    return MessageComponent;
}());
export { MessageComponent };
//# sourceMappingURL=message.js.map