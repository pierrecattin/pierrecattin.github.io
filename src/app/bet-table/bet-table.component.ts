import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Bet } from '../bet';

export interface betTable {
  cellKey: string;
  amount: Number;
}


@Component({
  selector: 'app-bet-table',
  templateUrl: './bet-table.component.html',
  styleUrls: ['./bet-table.component.scss']
})
export class BetTableComponent implements OnChanges  {
  @Input('bets') bets!:Bet[];

  displayedColumns: string[] = ['cellKey', 'amount'];
  dataSource: betTable[]=[];
  

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    console.log("change: size of bets= " +this.bets.length);
    this.refreshBetsTable();
  }


  refreshBetsTable(){
    this.bets=[];
    for(let bet of this.bets){
      this.addBetToTable(bet);
    }
  }
  addBetToTable(bet:Bet):void{
    let newEntry: betTable[]=[{cellKey:bet.cellKey, amount:bet.amount}];
    this.dataSource.push(newEntry[0]);
  }

}
