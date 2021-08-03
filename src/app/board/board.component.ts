import { Component, OnInit } from '@angular/core';
import { BetDialogComponent } from '../bet-dialog/bet-dialog.component';
import {MatDialog} from '@angular/material/dialog';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  tiles: Tile[];

  constructor() {
    this.tiles = []

    for (var num = 1; num <= 36; num++) {
      let cellColor: string='';
      if (num <= 10 || (num >= 19 && num <= 28)){
        if (num % 2 == 1) {
          cellColor = 'darkred';
        } else {
          cellColor = 'black';
        }
      } else {
        if (num % 2 == 1) {
          cellColor = 'black';
        } else {
          cellColor = 'darkred';
        }
      }

      this.tiles.push({ text: num.toString(), cols: 1, rows: 1, color: cellColor })
    }

  }

  ngOnInit(): void {

  }

  async placeBet(cellKey: string): Promise<void>{
    console.info(cellKey);
  }

}
