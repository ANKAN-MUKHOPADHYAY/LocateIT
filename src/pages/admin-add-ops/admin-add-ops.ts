import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdminAddOpsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-add-ops',
  templateUrl: 'admin-add-ops.html',
})
export class AdminAddOpsPage {
  info : string = "newCourse";
  infor: string ="newLocation";

  courseDetails : { course_name : string, imageurl: any, createdby: any, course_status: any, parentcategory: any} = { course_name : '', imageurl: '', createdby:'admin@techninzaz.com', course_status: 1, parentcategory: ''};

 //userdetail:{u_id : string, u_cid : string, u_lid : string} ={u_id : '', u_cid : '', u_lid : ''};

  LocationInfo : { Location_name : string, Location_city: string, Location_state: string, Location_pincode: string,Location_createdby: string, Location_relevant_name: string, Location_nearby: string} = {Location_name : '', Location_city: '', Location_state: '', Location_pincode: '',Location_createdby: '', Location_relevant_name: '', Location_nearby: ''}
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    

  addNewCourseProcess(){
    console.log(this.courseDetails);
  }

  }
  newLocation(){
    console.log(this.LocationInfo);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAddOpsPage');
  }

}
