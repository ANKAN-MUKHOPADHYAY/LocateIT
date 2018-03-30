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
  courses: any = [{
    name: "Sample 1",
    desc: "Lorem Ipsum"
  },{
    name: "Sample 2",
    desc: "Lorem Ipsum"
  },{
    name: "Sample 3",
    desc: "Lorem Ipsum3"
  },{
    name: "Sample 4",
    desc: "Lorem Ipsum4"
  },{
    name: "Sample 5",
    desc: "Lorem Ipsum5"
  },{
    name: "Sample 6",
    desc: "Lorem Ipsum6"
  },{
    name: "Sample 7",
    desc: "Lorem Ipsum7"
  },{
    name: "Sample 8",
    desc: "Lorem Ipsu8m"
  },{
    name: "Sample 9",
    desc: "Lorem Ipsum"
  },{
    name: "Sample 10",
    desc: "Lorem Ipsum"
  },{
    name: "Sample 11",
    desc: "Lorem Ipsum 11"
  }];

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
    if(this.navParams.data != undefined || this.navParams.data != null){
    console.log(this.navParams.data);
			this._restservice.get('/institute/getInstituteInformation/'+this.navParams.data).then( res => {
				console.log(res);
				this.courses = res.response[0].courses;
				//console.log(this.courses);
			});
		} else {
			//this.navCtrl.setRoot('MainPage');
		}
  }

}
