import { Component } from '@angular/core';

@Component({
  selector: 'inst-location',
  templateUrl: 'inst-location.html'
})
export class InstLocationComponent {

  showDesc=[];
  locations: any = [{
    name: "Location 1",
    desc: "Lorem Ipsum"
  },{
    name: "Location 2",
    desc: "Lorem Ipsum"
  },{
    name: "Location 3",
    desc: "Lorem Ipsum3"
  },{
    name: "Location 4",
    desc: "Lorem Ipsum4"
  },{
    name: "Sample 5",
    desc: "Lorem Ipsum5"
  }];

  constructor() {
    console.log('Hello InstLocationComponent Component');
    this.showDesc.push(false);
    console.log(this.locations);
  }

  showDescription(index,button){
    this.showDesc[index]=button;
  }

}
