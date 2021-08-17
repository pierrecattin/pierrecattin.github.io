import { Component, OnInit } from '@angular/core';
import { BetDialogComponent } from '../bet-dialog/bet-dialog.component';
import { PayoffDialogComponent } from '../payoff-dialog/payoff-dialog.component';
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

  placeBet(cell: Cell): void {
    const dialogRef = this.dialog.open(BetDialogComponent, {
      data: {
        cellPicked: Cell,
        betAmount: ''
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (this.isNumber(result)) {
        this.saveBet(cell, Number(result));
      }
    });
  }

  saveBet(cell: Cell, amount: number): void {
    this.bets.push(new Bet(cell, amount));
  }

  spin(): void {
    let dealer: Dealer = new Dealer();
    let results: [number, number] = dealer.pay(this.bets);

    const dialogRef = this.dialog.open(PayoffDialogComponent, {
      data: {
        spinOutcome:results[0],
        payoff: results[1]
      }
    });
}

  isNumber(n: any): boolean {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
  }

  mapFillColor(keyColor: Cell.Color): String {
    switch (keyColor) {
      case Cell.Color.black: {
        return ("black");
      } case Cell.Color.green: {
        return ("darkgreen");
      } case (Cell.Color.red): {
        return ("darkred");
      }
    }

  }

}
