import { Component, Input, Output, EventEmitter } from '@angular/core'; 

@Component({ 
  selector: 'app-user',
  template: `
      <input type="text" (input) = "onUserInput($event)" [value] = "name">
      <!-- <input type="text" [(ngModel)] = "name"> -->
      <p>Hello {{ name }}</p>
      <app-user-detail></app-user-detail>
    `
  })

export class UserComponent {
  @Input() name = 'Prince';
  @Output() nameChanged = new EventEmitter <String>();

  onUserInput(event) {
    this.name = event.target.value;
    this.nameChanged.emit(event.target.value);
  }
}