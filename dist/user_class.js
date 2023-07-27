"use strict";
class Users {
    constructor(name, balance) {
        this.name = '';
        this.balance = 0;
        this.name = name;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
}
const user1 = new Users('Andre', 200);
user1.deposit(100);
console.log(user1);
const user2 = new Users('Alice', 300);
user2.deposit(-200);
console.log(user2);
//# sourceMappingURL=user_class.js.map