import { Cell } from './cell';
export class Bet {
    cell:Cell;
    amount:Number;


  constructor(cell:Cell, value:number) {
      this.cell=cell;
      this.amount=value;
  }
}