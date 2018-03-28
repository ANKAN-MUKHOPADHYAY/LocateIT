import { Component } from '@angular/core';

/**
 * Generated class for the InstReviewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'inst-review',
  templateUrl: 'inst-review.html'
})
export class InstReviewComponent {

  text: string;

  constructor() {
    console.log('Hello InstReviewComponent Component');
    this.text = 'Hello World';
  }

}
