import { Component, OnInit } from '@angular/core';
import { BetDialogComponent } from '../bet-dialog/bet-dialog.component';
import { Bet } from '../logic/bet/bet';
import { Dealer } from '../logic/dealer/dealer';
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
export class BoardComponent {
  tiles: Tile[];
  bets: Bet[] = [];

  constructor(public dialog: MatDialog) {
    this.tiles = []

    for (var num = 1; num <= 36; num++) {
      let cellColor: string = '';
      if (num <= 10 || (num >= 19 && num <= 28)) {
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

  placeBet(cellKey: string): void {
    const dialogRef = this.dialog.open(BetDialogComponent,  {
      data: {
        cellKeyPicked: cellKey,
        betAmount:0
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.saveBet(cellKey, result);
    });
  }

  saveBet(cellKey:string, amount:number): void{
    console.log("new bet on "+cellKey+" for "+amount );
    this.bets.push(new Bet(cellKey, amount));
  }

  spin(): void {
    let dealer: Dealer = new Dealer();
    let payoff: number = dealer.pay(this.bets);
    console.info("payoff= " + payoff);
  }

}
