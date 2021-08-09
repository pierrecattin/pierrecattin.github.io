export class Bet {
    cellKey:string;
    amount:Number;


  constructor(cellKey:string, value:number) {
      this.cellKey=cellKey;
      this.amount=value;
  }
}