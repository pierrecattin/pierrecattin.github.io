import { Bet } from './bet';
import { Cell } from './cell';

export class Dealer {

    
    spin(): number{
        let outcome:number=Math.ceil(Math.random() * 36);
        console.info("outcome= "+outcome);
        return outcome;
    }

    betPayoff(spinOutcome:number, bet:Bet):number{
        /*switch () {
            case Cell.:
            case "Red": {
                return (Cell.Type.color);
            }
            case "Even":
            case "Odd": {
                return (Cell.Type.parity);
            }
            case "1st col":
            case "2nd col":
            case "3rd col": {
                return (Cell.Type.column);
            }
            case "1-18":
            case "1-12":
            case "13-24":
            case "19-36":
            case "25-36": {
                return (Cell.Type.range);
            }
        } */
        return(0);

    }

    pay(bets: Bet[]): number{
        let outcome:number=this.spin();
        return(0);
    }
}