import { Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PayoffModalDialogData } from '../payoff-modal-dialog-data';

@Component({
  selector: 'app-payoff-dialog',
  templateUrl: './payoff-dialog.component.html',
  styleUrls: ['./payoff-dialog.component.scss']
})
export class PayoffDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<PayoffDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PayoffModalDialogData){}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
