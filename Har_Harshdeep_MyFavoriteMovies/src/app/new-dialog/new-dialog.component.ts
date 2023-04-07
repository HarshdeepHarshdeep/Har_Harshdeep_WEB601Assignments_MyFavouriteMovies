import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-new-dialog',
  templateUrl: './new-dialog.component.html',
  styleUrls: ['./new-dialog.component.scss']
})
export class NewDialogComponent {
  information: any = {}

  constructor(public dialogRef: MatDialogRef<NewDialogComponent>){}
  addContent(){
    this.dialogRef.close(this.information);
  }
  close(){
    this.dialogRef.close();
  }
}
