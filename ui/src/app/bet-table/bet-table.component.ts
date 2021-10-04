import {
  Component,
  Input,
  DoCheck,
  KeyValueDiffers
} from '@angular/core';
import { Bet } from '../bet';
import { Cell } from '../cell';
export interface betTable {
  cellKey: string;
  amount: Number;
}


@Component({
  selector: 'app-bet-table',
  templateUrl: './bet-table.component.html',
  styleUrls: ['./bet-table.component.scss']
})
export class BetTableComponent implements DoCheck {
  @Input('bets') bets!: Bet[];
  differ: any;
  displayedColumns: string[] = ['cellKey', 'amount'];
  dataSource: betTable[] = [];

  constructor(differs: KeyValueDiffers) {
    this.differ = differs.find([]).create();
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.bets);
    if (changes) {
      this.refreshBetsTable();
    }
  }

  refreshBetsTable() {
    this.dataSource=[];
    for (let bet of this.bets) {
      this.addBetToTable(bet);
    }
  }
  addBetToTable(bet: Bet): void {
    let newEntry: betTable[] = [{ cellKey: bet.cell.key, amount: bet.amount }];
    this.dataSource.push(newEntry[0]);
  }

}
