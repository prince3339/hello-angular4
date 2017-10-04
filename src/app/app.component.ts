import { Component } from '@angular/core';
import { random } from 'lodash';
//import 'lodash';

//declare var _:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rootName = 'Sabbir Ahmed';

  number = 1;
  
  onIncrease() {
    this.number = random(1, 10);
  }

  onNameChanged(newName) {
    this.rootName = newName;
  }
}
