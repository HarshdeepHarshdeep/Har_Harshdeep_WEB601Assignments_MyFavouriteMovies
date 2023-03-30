import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  information: any = {}
  @Output() createEvent = new EventEmitter<any>();


  addContent(){
    this.createEvent.emit(this.information);
    this.information = {};
  }
}
