import { Bet } from '../bet/bet';

export class Dealer {

    
    spin(): number{
        let outcome:number=Math.ceil(Math.random() * 36);
        console.info("outcome= "+outcome);
        return outcome;
    }

    pay(bets: Bet[]): number{
        return(this.spin());
    }
}