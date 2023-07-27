class Users{
    public name: string = '';
    private balance: number = 0;


    constructor(name: string, balance: number){
        this.name = name;
        this.balance = balance;
    }

    deposit(amount: number){
        this.balance += amount;
    }
}

const user1 = new Users('Andre', 200);
user1.deposit(100);
console.log(user1);

const user2 = new Users('Alice', 300);
user2.deposit(-200);
console.log(user2);