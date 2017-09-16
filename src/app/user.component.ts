import { Component } from '@angular/core'; 

@Component({ 
  selector: 'app-user',
  template: `
      <!-- <input type="text" (input) = "onUserInput($event)" [value] = "name"> -->
      <input type="text" [(ngModel)] = "name">
      <p>Hello {{ name }}</p>
    `
  })

export class UserComponent {
  name = 'Prince';

  onUserInput(event) {
    this.name = event.target.value;
  }
}