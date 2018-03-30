import { Component } from '@angular/core';

/**
 * Generated class for the RecommendedInstituteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'recommended-institute',
  templateUrl: 'recommended-institute.html'
})
export class RecommendedInstituteComponent {

  text: string;

  constructor() {
    console.log('Hello RecommendedInstituteComponent Component');
    this.text = 'Hello World';
  }

}
