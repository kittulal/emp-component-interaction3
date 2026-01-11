import { Component, signal, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { Child1Component } from './child1/child1';
import { Child2Component } from './child2/child2';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Child1Component, Child2Component],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {

   child1Message = '';
  child2Message = '';

  receiveFromChild1(msg: string) {
    this.child1Message = msg;
  }

  receiveFromChild2(msg: string) {
    this.child2Message = msg;
  }
}