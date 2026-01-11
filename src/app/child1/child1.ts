import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.html'
})
export class Child1Component {
  @Input() messageFromChild2 = '';
  @Output() messageToParent = new EventEmitter<string>();

  sendMessage() {
    this.messageToParent.emit(
      'Hello Child2! Message from Child1'
    );
  }
}
