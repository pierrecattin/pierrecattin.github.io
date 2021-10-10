import { Bet } from './bet';

export class Dealer {    
    spin(): number{
        let outcome:number=Math.ceil(Math.random() * 36);
        console.info("outcome= "+outcome);
        return outcome;
    }

    betPayoff(spinOutcome:number, bet:Bet):number{
        if(bet.cell.winningNumbers.includes(spinOutcome)){
            return(bet.cell.payoffFactor*bet.amount);
        } else {
            return(0);
        }
    }

    pay(bets: Bet[]): [number, number]{
        let outcome:number=this.spin();
        let totalPayoff: number=0;
        for(let bet of bets){
            totalPayoff+=this.betPayoff(outcome, bet);
        }
        return([outcome, totalPayoff]);
    }
}

