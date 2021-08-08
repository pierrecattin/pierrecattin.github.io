import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BetModalDialogData } from '../bet-modal-dialog-data';

@Component({
  selector: 'bet-dialog',
  templateUrl: './bet-dialog.component.html',
})
export class BetDialogComponent  {
  constructor(@Inject(MAT_DIALOG_DATA) public data: BetModalDialogData) {}
}
