import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';


/**
* Generated class for the UseraccountPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-useraccount',
  templateUrl: 'useraccount.html',
})
export class UseraccountPage {
  turn: any = {
    uid: "",
    mail: "",
    msg: "",
    call: "",
    active: ""
  };

  change: boolean = true;
  //res: any = {"status":true,"result":{"user_id":79,"user_first_name":"ALOO","user_last_name":"GOBI","user_mobile_number":4141414141,"user_altmobile_number":4141414141,"user_email":"ALOO.GOBI@GMAIL.COM","user_type":"Student","active_status":1,"uniqueid":6,"username":"ALOO_GOBI","subscribe_message":0,"subscribe_call":0,"subscribe_mail":0,"attr1":null}};

  current_username : any;
  new_firstname:any;
  new_lastname:any;
  userData: any = {
    user_currentpassword: "",
    user_newpassword: "",
    user_verifypassword: ""
  };

   pwdRequestData: any ={
     u_old_pwd : "",
     u_new_pwd : "",
     uid : ""
   };


  constructor(public navCtrl: NavController, public navParams: NavParams, public _restservice: HttpServiceProvider) {
  }

  notify(event){
    this.change = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UseraccountPage');
    this._restservice.get('/user/userinfo/'+sessionStorage.getItem('userid')).then( res => {
      console.log(sessionStorage.getItem('userid'));
      if(res.status == true){
        console.log(res.status);
        this.current_username = res.result.LOC_USERNAME;
        console.log(this.current_username);

        if(res.result.LOC_USER_SUB_CALL == 1){
          this.turn.call = true;
        }else {
             this.turn.call = false;
        }

        if(res.result.LOC_USER_ACTIVE == 1){
          this.turn.active = true;
        }
        else{
          this.turn.active = false;
        }
        if(res.result.LOC_USER_SUB_MAIL == 1){
          this.turn.mail = true;
        }
        else{
          this.turn.mail = false;
        }
        if(res.result.LOC_USER_SUB_MAIL == 1){
          this.turn.theme = true;
        }
        else{
          this.turn.theme = false;
        }
        if(res.result.LOC_USER_SUB_MSG == 1){
          this.turn.msg = true;
        }
        else{
          this.turn.msg = false;
        }
      }else{
        console.log("nothing to display");
      }
    });
  }
  updatePreference(datas){

    if(this.turn.call == true){
          this.turn.call = 1;
    }else {
         this.turn.call = 0;
    }
    if(this.turn.active == true){
      this.turn.active = 1;
    }
    else{
      this.turn.active = 0;
    }
    if(this.turn.mail == true){
      this.turn.mail = 1;
    }
    else{
      this.turn.mail = 0;
    }
    if(this.turn.theme == true){
      this.turn.theme =1;
    }
    else{
      this.turn.main = 0;
    }
    if(this.turn.msg == true){
      this.turn.msg = 1;
    }
    else{
      this.turn.msg = 0;
    }
    this.turn.uid = sessionStorage.getItem('userid');
    this._restservice.put('/user/updateuserpreference',JSON.stringify(this.turn)).then(response=>{
      console.log(this.turn);
    });

  }

  update() {
    this._restservice.get('/user/userinfo/').then(res=>{
      console.log(res);
    });
  }
  updatePwd(data){
		console.log(this.userData);
    this.pwdRequestData.u_old_pwd = this.userData.user_currentpassword;
    this.pwdRequestData.u_new_pwd = this.userData.user_newpassword;
    this.pwdRequestData.uid = sessionStorage.getItem("userid");

    this._restservice.put('/user/updatepassword',JSON.stringify(this.pwdRequestData)).then(resp => {
      console.log(resp);
    });
	 }

   submitForm(data){
     this._restservice.put('/user/updateusername/',JSON.stringify({
       uid: sessionStorage.getItem('userid'),
       username: this.current_username
     })).then(resp=>{
       console.log(resp);
     });
   }
 }
