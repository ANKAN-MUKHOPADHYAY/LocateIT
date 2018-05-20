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

  ionViewDidLoad() {
    console.log('ionViewDidLoad UseraccountPage');
    this._restservice.get('/user/userinfo/'+sessionStorage.getItem('userid')).then( res => {
      console.log(sessionStorage.getItem('userid'));
      if(res.status == true){
        console.log(res.status);
        this.current_username = res.result.username;
        console.log(this.current_username);
      } else {
        console.log("nothing to display");
      }
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
  /*update() {
    this._restService.put('/user/updatepassword',JSON.stringify(this.userinfo)).then(res => {
        console.log(res);
        sessionStorage.setItem('userid',res.result.user_id);
        this.userdetail.u_id = res.result.user_id;
  }*/
}
