import { Component } from '@angular/core';

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

  constructor() {
    console.log('Hello InstCourseComponent Component');
    this.text = 'Hello World';
    this.showDesc.push(false);
    //this.courses = data;
    console.log(this.courses);
  }
  showDescription(index,button){
    this.showDesc[index]=button;
  }

}
