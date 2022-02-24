abstract class Person {
    constructor(public name: string) { };

    changeAdress(newAdress: string) {
        console.log(`Changin adress to ${newAdress}`);
    }

    giveDayOff() { 2 ((CO5-3))
    console.log(`Giving a day off to ${this.name}`);
    }

    promote(percent: number) {
        this.giveDayOff();
        this.increasePay(percent);
    }

    abstract increasePay(percent:number): void;
}

class Employee extends Person {
    increasePay(percent: number) {
        console.log(`Increasing the salary of ${this.name} by ${percent}%`);
    }
}

class Contractor extends Person {
    increasePay(percent: number) {
        console.log(`Increasing the hourly rate of ${this.name} by ${percent}%`);
    }
}