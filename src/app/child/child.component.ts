import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() PassTo: string;
  @Output() sendPar: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() {}

  ngOnInit() {}

  sendToParent() {
    console.log('LoginChild');
    this.sendPar.emit('Parent');
  }
}
