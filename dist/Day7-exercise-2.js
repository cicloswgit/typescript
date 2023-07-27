"use strict";
// Day 7 - Exercise 2
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(meters) {
        console.log(`${this.name} moved ${meters}m.`);
    }
}
class Snake extends Animal {
    move(meters = 5) {
        console.log('Slithering...');
        super.move(meters);
    }
}
class Pony extends Animal {
    move(meters) {
        console.log('Galloping...');
        super.move(meters);
    }
}
const sammy = new Snake("Sammy the Snake");
sammy.move();
const pokey = new Pony("Pokey the Pony");
pokey.move(34);
//# sourceMappingURL=Day7-exercise-2.js.map