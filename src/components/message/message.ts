import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

@Component({
  selector: 'message',
  templateUrl: 'message.html'
})
export class MessageComponent {
  now:any; year:any; month:any; day:any; hour:any; minute:any; second:any;
  userMsg : {transactionid:string,message:{from:string,text:string,timestamp:string}} = {transactionid: sessionStorage.getItem('trans'),message:{from:"customer",text : '',timestamp: this.js_yyyy_mm_dd_hh_mm_ss()}};
  messages: any; restUrl: any; navParamType : any; data : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _restservice: HttpServiceProvider) {
    if(sessionStorage.getItem('trans') != undefined || sessionStorage.getItem('trans') != null){
      this.getMessages();
      setInterval(() => {
        this.getMessages();
      }, 6000);
    } else {
      this.messages = null;
    }
  }

  getMessages(){
    this._restservice.get('/user/usermessage/'+sessionStorage.getItem('trans'),false).then( res => {
      this.messages = JSON.parse(res.result);
      console.log(this.messages);
    });
  }

  sendMessageProcess(data){
    //console.log(this.userMsg);
    this._restservice.post('/institute/sendMessage',JSON.stringify(this.userMsg)).then( res => {
      //console.log(res);
      this.data = {
        "from" : "customer",
        "text" : this.userMsg.message.text,
        "timestamp": this.js_yyyy_mm_dd_hh_mm_ss()
      };
      if(this.messages == null){
        this.messages = [];
        this.messages.push(this.data);
        console.log(this.messages);
      } else {
        this.messages.push(this.data);
      }
      this.userMsg.message.text = '';
    });
  }

  js_yyyy_mm_dd_hh_mm_ss () {
    this.now = new Date();
    console.log(this.now);
    this.year = "" + this.now.getFullYear();
    this.month = "" + (this.now.getMonth() + 1); if (this.month.length == 1) { this.month = "0" + this.month; }
    this.day = "" + this.now.getDate(); if (this.day.length == 1) { this.day = "0" + this.day; }
    this.hour = "" + this.now.getHours(); if (this.hour.length == 1) { this.hour = "0" + this.hour; }
    this.minute = "" + this.now.getMinutes(); if (this.minute.length == 1) { this.minute = "0" + this.minute; }
    this.second = "" + this.now.getSeconds(); if (this.second.length == 1) { this.second = "0" + this.second; }
    return this.year + "-" + this.month + "-" + this.day + " " + this.hour + ":" + this.minute + ":" + this.second;
  }
}
