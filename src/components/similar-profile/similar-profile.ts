import { Component } from '@angular/core';

@Component({
  selector: 'similar-profile',
  templateUrl: 'similar-profile.html'
})
export class SimilarProfileComponent {

  similarProfiles : any = [{
    id: "1",
    imgUrl: "https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/1953912-medium190ap.jpg",
    name: "TechNinzaz",
  },{
    id: "2",
    imgUrl: "https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/3575964-medium130ap.png",
    name: "BitzDoor Software",
  },{
    id: "3",
    imgUrl: "https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/178486-medium130ap.jpg",
    name: "object",
  },{
    id: "4",
    imgUrl: "https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/3136495-medium130ap.png",
    name: "Expert Lab",
  },{
    id: "5",
    imgUrl: "https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/2110978-medium130ap.png",
    name: "encryption",
  },{
    id: "6",
    imgUrl: "https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/224144-medium130ap.png",
    name: "iStepUp",
  },{
    id: "7",
    imgUrl: "https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/3712261-medium130ap.jpg",
    name: "Edge Pro",
  },{
    id: "8",
    imgUrl: "https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/4122013-medium130ap.png",
    name: "Techno growth",
  }];

  constructor() {
    //console.log('Hello SimilarProfileComponent Component');
    //console.log(this.similarProfiles);
  }



}
