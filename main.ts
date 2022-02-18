function getFinalPrice(price: number, discount: number) {
    return price - price/discount;
}

console.log(getFinalPrice(100,10));
console.log(getFinalPrice(100,20));

function calcTax(state: string, income: number, dependents: number): number {
    if (state=='NY') {
        return income * 0.06 - dependents * 500;
    } else if (state === 'NJ') {
        return income * 0.05 - dependents * 300;
    }
}

function padLeft (value: string, padding: number | string): string {
    if (typeof padding === "number") {
        return Array(padding+1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
}

class Person {
    constructor(public firstName: string, public lastName: string, public age: number) {};
}

const p = new Person("John","Smith",35);

interface Person {
    firstName: string;
    lastName: string;
    age: number;
}