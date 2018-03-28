import { Component } from '@angular/core';

/**
 * Generated class for the InstLocationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'inst-location',
  templateUrl: 'inst-location.html'
})
export class InstLocationComponent {

  text: string;

  constructor() {
    console.log('Hello InstLocationComponent Component');
    this.text = 'Hello World';
  }

}
