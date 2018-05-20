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
   uid:any;
   userData: any = {
		user_currentpassword: "",
		user_newpassword: "",
		user_verifypassword: ""
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
   submitForm(data){
     this._restservice.put('/user/updateusername/',JSON.stringify({
       uid: sessionStorage.getItem('userid'),
       username: this.current_username
     })).then(resp=>{
       console.log(resp);
     });
   }
   updatePwd(data){
		console.log(this.userData);
	}
 }
