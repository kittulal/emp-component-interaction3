import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.html'
})
export class Child2Component {

  @Input() messageFromChild1 = '';
  @Output() messageToParent = new EventEmitter<string>();

  sendToChild1() {
    this.messageToParent.emit(
      'Hello Child1! Reply from Child2'
    );
  }
}