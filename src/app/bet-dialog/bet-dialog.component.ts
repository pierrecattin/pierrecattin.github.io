import { Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BetModalDialogData } from '../bet-modal-dialog-data';

@Component({
  selector: 'bet-dialog',
  templateUrl: './bet-dialog.component.html',
})
export class BetDialogComponent  {
  constructor(
    public dialogRef: MatDialogRef<BetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BetModalDialogData){}

    onNoClick(): void {
      this.dialogRef.close();
    }
}
