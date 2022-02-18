class Dog {
    constructor(public name: string) {};

    sayHello(): string {
        return 'Hello, I am'+this.name;
    }
}


class Fish {
    constructor(public name: string) {}

    dive(howDeep: number): string {
        return `Diving ${howDeep} feet`;
    }
}

type Pet = Dog | Fish

function talkToPet(pet: Pet): string | undefined {
    if (pet instanceof Dog) {
    return pet.sayHello();
    } else if (pet instanceof Fish) {
        return 'Fish cannot talk, sorry.';
    }
}

const Mydog = new Dog('Mauro');
const Myfish = new Fish('Julio');

console.log(talkToPet(Mydog));
console.log(talkToPet(Myfish));
