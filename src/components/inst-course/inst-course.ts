import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

@Component({
  selector: 'inst-course',
  templateUrl: 'inst-course.html'
})
export class InstCourseComponent {
  text: string;
  showDesc=[];
  courses: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _restservice: HttpServiceProvider) {
    //console.log('Hello InstCourseComponent Component');
    this.text = 'Hello World';
    this.showDesc.push(false);
    this.instituteOfferedCourses();
    //console.log(this.courses);
  }
  showDescription(index,button){
    this.showDesc[index]=button;
  }

  instituteOfferedCourses() {
    if(typeof(this.navParams.data) == Number){
      this.restUrl = '/institute/getInstituteInformation/'+this.navParams.data;
		} else {
      this.restUrl = '/institute/getInstituteInformation/'+sessionStorage.getItem('instlooking');
		}
    this.getData();
  }

  getData() {
    this._restservice.get(this.restUrl).then( res => {
      this.courses = res.response[0].courses;
      //console.log(this.instituteInfos);
    });
  }

}
