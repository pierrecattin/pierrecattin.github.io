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
    for (var num = 1; num <= 36; num++) {
      this.cells.push(new Cell(String(num)));
    }

    this.cells.push(new Cell(String("Even")));
    this.cells.push(new Cell(String("Odd")));
    this.cells.push(new Cell(String("1st col")));
    this.cells.push(new Cell(String("2nd col")));
    this.cells.push(new Cell(String("3rd col")));
    this.cells.push(new Cell(String("Red")));
    this.cells.push(new Cell(String("Black")));
    this.cells.push(new Cell(String("1-18")));
    this.cells.push(new Cell(String("1-12")));
    this.cells.push(new Cell(String("13-24")));
    this.cells.push(new Cell(String("25-36")));
    this.cells.push(new Cell(String("19-36")));
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
