export class Cell {
    key: string;
    color: Cell.Color;
    type: Cell.Type;
    payoffFactor: number;
    winningNumbers: number[];
    colspan: number;
    rowspan: number;

    constructor(key: string, colspan: number, rowspan: number) {
        this.key = key; // validity of key checked in getType()
        this.type = this.getType();
        this.color = this.getColor();
        this.winningNumbers = this.getWinningNumbers();
        this.payoffFactor = this.getPayoffFactor();
        this.colspan = colspan;
        this.rowspan = rowspan;
    }

    getType(): Cell.Type {
        if (this.key.length <= 2) {
            return (Cell.Type.number);
        }
        switch (this.key) {
            case "Black":
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
        }
        throw new Error('Invalid key: ' + this.key);
    }


    getWinningNumbers(): number[] {
        let winningNumbers: number[] = [];
        switch (this.type) {
            case (Cell.Type.number): {
                winningNumbers.push(this.getNumber());
                return (winningNumbers);
            }
            case Cell.Type.color: {
                for (let i = 1; i <= 36; i++) {
                    if (this.color == this.findNumberColor(i)) {
                        winningNumbers.push(i);
                    }
                }
                return (winningNumbers);
            } case Cell.Type.parity: {
                for (let i = 1; i <= 36; i++) {
                    if ((this.key == "Even" && (i % 2 == 0)) ||
                        this.key == "Odd" && (i % 2 == 1)) {
                        winningNumbers.push(i);
                    }
                }
                return (winningNumbers);
            } case Cell.Type.range: {
                let rangeBounds:string[]=this.key.split("-");
                if(rangeBounds.length!=2){
                    throw new Error('Invalid key for Cell.Type.range: ' + this.key);
                }
                for(let i = +rangeBounds[0]; i<=+rangeBounds[1]; i++){
                    winningNumbers.push(i);
                }
                return(winningNumbers);
            } case Cell.Type.column: {
                for (let i = 1; i <= 36; i++) {
                    if ((this.key == "1st col" && (i % 3 == 1)) ||
                        this.key == "2nd col" && (i % 3 == 2)||
                        this.key == "3rd col" && (i % 3 == 0)) {
                        winningNumbers.push(i);
                    }
                }
                return(winningNumbers);
            }
        }
    }



    getPayoffFactor(): number {
        return (36 / (this.winningNumbers.length));
    }

    getSpan(): void {
        if (this.key.length <= 2) {
            this.rowspan = 1;
            this.colspan = 1;
            return;
        }
        switch (this.key) {
            case "Black":
            case "Red": {
                this.rowspan = 1;
                this.colspan = 1;
                return;
            }
            case "Even":
            case "Odd": {
                this.rowspan = 1;
                this.colspan = 1;
                return;
            }
            case "1st col":
            case "2nd col":
            case "3rd col": {
                this.rowspan = 1;
                this.colspan = 1;
                return;
            }
            case "1-18":
            case "1-12":
            case "13-24":
            case "19-36":
            case "25-36": {
                this.rowspan = 1;
                this.colspan = 1;
                return;
            }
        }
        throw new Error('Invalid key: ' + this.key);
    }

    getColor(): Cell.Color {
        switch (this.type) {
            case Cell.Type.color: {
                if (this.key == "Black") {
                    return (Cell.Color.black)
                } else {
                    return (Cell.Color.red);
                }
            }
            case Cell.Type.number: {
                return this.getNumberColor();
            }
        }
        return (Cell.Color.green); // for type column and range 

    }

    getNumber(): number {
        this.checkTypeNumber();
        return (+this.key);
    }

    checkTypeNumber(): void {
        if (this.type != Cell.Type.number) {
            throw new Error('Not a Cell.Type.number');
        }
    }

    getNumberColor(): Cell.Color {
        this.checkTypeNumber();
        return (this.findNumberColor(this.getNumber()));
    }

    findNumberColor(num: number): Cell.Color {
        let cellColor: Cell.Color;
        if (num <= 10 || (num >= 19 && num <= 28)) {
            if (num % 2 == 1) {
                cellColor = Cell.Color.red;
            } else {
                cellColor = Cell.Color.black;
            }
        } else {
            if (num % 2 == 1) {
                cellColor = Cell.Color.black;
            } else {
                cellColor = Cell.Color.red;
            }
        }
        return (cellColor);
    }

    public adaptForContract(): [number, number]{
        /*number, // 0
        red, // 1
        black, // 2
        odd, // 3
        even, // 4
        range_1_18, // 5
        range_19_36, // 6
        range_1_12, // 7
        range_13_24, // 8
        range_25_36, // 9
        column_1, // 10
        column_2, // 11
        column_3 // 12 */
        if (this.key.length <= 2) {
            return ([0,this.getNumber()]);
        }
        switch (this.key) {
            case "Red": return([1,0])
            case "Black": return([2,0])
            case "Odd": return ([3,0]);
            case "Even": return ([4,0]);
            case "1-18": return ([5,0]);
            case "19-36": return ([6,0]);
            case "1-12": return ([7,0]);
            case "13-24": return ([8,0]);
            case "25-36":  return ([9,0]);
            case "1st col": return ([10,0]);
            case "2nd col": return ([11,0]);
            case "3rd col": return ([12,0]);
        }
        throw new Error('Invalid key: ' + this.key);
    }

}

export namespace Cell {
    export enum Type {
        number = "number",
        color = "color",
        range = "range",
        column = "column",
        parity = "parity"
    }

    export enum Color {
        green = "green",
        red = "red",
        black = "black"
    }
}