import { Component, OnInit } from '@angular/core';
import { BetDialogComponent } from '../bet-dialog/bet-dialog.component';
import { Bet } from '../bet';
import { Dealer } from '../dealer';
import { Cell } from '../cell';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  cells: Cell[];
  bets: Bet[] = [];

  constructor(public dialog: MatDialog) {
    this.cells = []

    // add cells in order they should be placed
    this.cells.push(new Cell("1-18", 1, 2));
    this.cells.push(new Cell("1-12", 1, 4));

    for (var num = 1; num <= 6; num++) {
      this.cells.push(new Cell(String(num), 1, 1));
    }
    this.cells.push(new Cell("Even", 1, 2));
    for (var num = 7; num <= 12; num++) {
      this.cells.push(new Cell(String(num), 1, 1));
    }
    this.cells.push(new Cell("Red", 1, 2));
    this.cells.push(new Cell("13-24", 1, 4));
    for (var num = 13; num <= 18; num++) {
      this.cells.push(new Cell(String(num), 1, 1));
    }
    this.cells.push(new Cell("Black", 1, 2));
    for (var num = 19; num <= 24; num++) {
      this.cells.push(new Cell(String(num), 1, 1));
    }
    this.cells.push(new Cell("Odd", 1, 2));
    this.cells.push(new Cell("25-36", 1, 4));
    for (var num = 25; num <= 30; num++) {
      this.cells.push(new Cell(String(num), 1, 1));
    }
    this.cells.push(new Cell("19-36", 1, 2));
    for (var num = 31; num <= 36; num++) {
      this.cells.push(new Cell(String(num), 1, 1));
    }
    this.cells.push(new Cell("1st col", 1, 1));
    this.cells.push(new Cell("2nd col", 1, 1));
    this.cells.push(new Cell("3rd col", 1, 1));
  }

  placeBet(cellKey: string): void {
    const dialogRef = this.dialog.open(BetDialogComponent, {
      data: {
        cellKeyPicked: cellKey,
        betAmount: 0
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.saveBet(cellKey, result);
    });
  }

  saveBet(cellKey: string, amount: number): void {
    console.log("new bet on " + cellKey + " for " + amount);
    this.bets.push(new Bet(cellKey, amount));
  }

  spin(): void {
    let dealer: Dealer = new Dealer();
    let payoff: number = dealer.pay(this.bets);
    console.info("payoff= " + payoff);
  }

}
