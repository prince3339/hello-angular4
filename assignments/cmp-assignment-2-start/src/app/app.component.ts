import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rootName = 'Sabbir Ahmed';
  allItems = ['Apples', 'Bananas', 'Cherries'];

  onNameChanged(newName) {
    this.rootName = newName;
  }
  addNewItems(newItem) {
    this.allItems.push(newItem);
    console.log(this.allItems);
  }
}
