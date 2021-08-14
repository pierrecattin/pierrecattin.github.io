import { Component, Input, OnInit } from '@angular/core';
import { Bet } from '../bet';
import { BoardComponent } from '../board/board.component';

export interface betTable {
  cellKey: string;
  amount: Number;
}


@Component({
  selector: 'app-bet-table',
  templateUrl: './bet-table.component.html',
  styleUrls: ['./bet-table.component.scss']
})
export class BetTableComponent implements OnInit  {
  @Input() bets!: Bet[];
  displayedColumns: string[] = ['cellKey', 'amount'];
  dataSource: betTable[]=[];
  
  constructor() { 
    this.dataSource  = [
      {cellKey: "Red", amount: 10},
      {cellKey: "Black", amount: 20},
      {cellKey: "1", amount: 20}
    ];
  }

  ngOnInit(){
    for(let bet of this.bets){
      this.addBet(bet);
    }
  }

  addBet(bet:Bet):void{
    // Check https://angular.io/guide/component-interaction
    let newEntry: betTable[]=[{cellKey:bet.cellKey, amount:bet.amount}];
    this.dataSource.push(newEntry[0]);
  }

}
