import { Cell } from './cell';
export class Bet {
    cell:Cell;
    amount:number;


  constructor(cell:Cell, value:number) {
      this.cell=cell;
      this.amount=value;
  }
}