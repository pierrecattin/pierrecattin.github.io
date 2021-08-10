import { Bet } from './bet';

export class Dealer {

    
    spin(): number{
        let outcome:number=Math.ceil(Math.random() * 36);
        console.info("outcome= "+outcome);
        return outcome;
    }

    betPayoff(spinOutcome:number, bet:Bet):number{
         return(0);
    }

    pay(bets: Bet[]): number{
        let outcome:number=this.spin();
        return(0);
    }
}