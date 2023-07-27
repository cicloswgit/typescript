"use strict";
//hello world :)
console.log('Hi...');
// fixed variables type
function add(num1, num2) {
    return num1 + num2;
}
let result = add(5, 8);
console.log(result);
//array type
let nomes = ['maria', 'joão', 'carla'];
nomes.forEach(element => {
    console.log(element);
});
// tuple type
let item = ['carlos', 50, true];
console.log(item[1].toString);
item.forEach(element => {
    console.log(element);
});
// enum type
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["read"] = 2] = "read";
    Role[Role["backup"] = 3] = "backup";
})(Role || (Role = {}));
//object
const employee = {
    fistName: 'Ângelo',
    age: 40,
    role: Role.admin
};
console.log(typeof (employee)); // type of object
console.log(employee);
console.log(employee.fistName);
console.log(employee.age);
console.log(employee.role);
//fixed format result
function remove(num1, num2) {
    return num1 - num2;
}
console.log(remove(5, 1));
// void return
function sell(price) {
    console.log('This result is ' + price);
}
console.log(sell(1)); //undefined result
const user1 = {
    anyName: 'sweet'
};
console.log(typeof (user1));
const user2 = {
    nickName: 'sweet',
    realName: 'dreams'
};
console.log(user2);
// Union
function userInput(input1, input2) {
    if (typeof (input1) === 'number' && typeof (input2) === 'number')
        return input1 + input2;
    else
        return input1.toString() + ' ' + input2.toString();
}
const combinePrices = userInput(10, 20);
console.log(combinePrices);
const combineNames = userInput('Avril', 'Lavigne');
console.log(combineNames);
const combinePriceAndName = userInput('Avril', '2000');
console.log(combinePriceAndName);
// literal
let tag;
tag = 20;
// literal and union
let price;
price = 20;
let size;
size = 'S';
const newHit = {
    text: "Você é assim, um sonho pra mim ...",
    notes: ["Dó", "Ré", "Mi"]
};
console.log(newHit);
// error handling - never
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('The application crashed', 500);
//# sourceMappingURL=index.js.map