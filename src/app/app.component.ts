import { Component } from '@angular/core';

import { person } from './person';

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular dynamic reactive forms</h1>

    <dynamic-form [dataObject]="person"></dynamic-form>
  `
})
export class AppComponent {
  person;

  constructor() {
    this.person = person;
  }
}
