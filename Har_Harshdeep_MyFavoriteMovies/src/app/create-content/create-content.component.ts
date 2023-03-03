import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  information: any = {}
  @Output() createEvent = new EventEmitter<any>();


  addContent(){
    this.createEvent.emit(this.information);
    this.information = {};
  }
}
