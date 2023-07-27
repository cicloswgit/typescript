"use strict";
// Day 5 - Exercise 5
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user = new User('Dog', 1);
console.log(user.id);
user.name = 'Harold'; // pode mudar
//user.id = 5 // nao pode mudar
console.log(`User:`, user);
//# sourceMappingURL=Day5-exercise-5.js.map