import { Component, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NewDialogComponent } from '../new-dialog/new-dialog.component';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  information: any = {}
  @Output() createEvent = new EventEmitter<any>();

  constructor(public dialog: MatDialog){}
  openDialog(){
    const dialogRef =this.dialog.open(NewDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.information = result;
        this.addContent();
      }
    });
  }
  addContent(){
    this.createEvent.emit(this.information);
    this.information = {};
  }
}
