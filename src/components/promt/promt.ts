import { Component } from '@angular/core';

/**
 * Generated class for the PromtComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'promt',
  templateUrl: 'promt.html'
})
export class PromtComponent {

  text: string;

  constructor() {
    console.log('Hello PromtComponent Component');
    this.text = 'Hello World';
  }

}
