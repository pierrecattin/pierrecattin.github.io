export class Cell {
    key: string;
    color: Cell.Color;
    type: Cell.Type;
    colspan: number;
    rowspan: number;


    constructor(key: string,  colspan: number, rowspan: number) {
        this.key = key; // validity of key checked in findType()
        this.type = this.findType();
        this.color = this.findColor();
        this.colspan=colspan;
        this.rowspan=rowspan;
    }


    findType(): Cell.Type {
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

    setSpan(): void{
        if (this.key.length <= 2) {
            this.rowspan=1;
            this.colspan=1;
            return;
        }
        switch (this.key) {
            case "Black":
            case "Red": {
                this.rowspan=1;
                this.colspan=1;
                return;
            }
            case "Even":
            case "Odd": {
                this.rowspan=1;
                this.colspan=1;
                return;
            }
            case "1st col":
            case "2nd col":
            case "3rd col": {
                this.rowspan=1;
                this.colspan=1;
                return;
            }
            case "1-18":
            case "1-12":
            case "13-24":
            case "19-36":
            case "25-36": {
                this.rowspan=1;
                this.colspan=1;
                return;
            }
        }
        throw new Error('Invalid key: ' + this.key);
    }

    findColor(): Cell.Color {
        switch (this.type) {
            case Cell.Type.color: {
                if (this.key == "Black") {
                    return (Cell.Color.black)
                } else {
                    return (Cell.Color.red);
                }
            }
            case Cell.Type.number: {
                return this.findNumberColor();
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

    findNumberColor(): Cell.Color {
        this.checkTypeNumber();
        let num: number = this.getNumber();

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
        green = "darkgreen",
        red = "darkred",
        black = "black"
    }
}