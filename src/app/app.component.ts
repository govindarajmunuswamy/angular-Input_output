import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  sendData: string = '';

  sendchild() {
    this.sendData = 'Child';
  }
  ReceiveChild(val) {
    this.sendData = val;
  }
}
