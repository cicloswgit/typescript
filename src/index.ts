//hello world :)
console.log('Hi...')

// fixed variables type
function add(num1: number, num2: number){
    return num1 + num2
}
let result = add(5, 8)
console.log(result)

//array type
let nomes: string[] = ['maria', 'joão', 'carla']
nomes.forEach(element => {
    console.log(element)
});

// tuple type
let item: [string, number, boolean] = ['carlos', 50, true]
console.log(item[1].toString)
item.forEach(element => {
    console.log(element)
});


// enum type
enum Role {admin = 1, read = 2, backup = 3}

//object
const employee = {
    fistName: 'Ângelo',
    age: 40,
    role: Role.admin
}
console.log(typeof(employee)) // type of object
console.log(employee)
console.log(employee.fistName)
console.log(employee.age)
console.log(employee.role)

//fixed format result
function remove(num1: number, num2: number): number{
    return num1 - num2
}
console.log(remove(5,1))

// void return
function sell(price: number){
    console.log('This result is ' + price)
}
console.log(sell(1)) //undefined result

// alias
type UserWithoutModel = {
}

const user1: UserWithoutModel = {
    anyName: 'sweet'
}
console.log(typeof(user1))

type UserWithModel = {
    nickName: string,
    realName: string
}
const user2: UserWithModel = {
    nickName: 'sweet',
    realName: 'dreams'
}
console.log(user2)


// Union
function userInput ( input1: number | string, input2: number | string ){
    if (typeof(input1) === 'number' && typeof(input2) === 'number') 
        return input1 + input2
    else 
        return input1.toString() + ' '+ input2.toString() 

}
const combinePrices = userInput(10, 20)
console.log(combinePrices)

const combineNames = userInput('Avril', 'Lavigne')
console.log(combineNames)

const combinePriceAndName = userInput('Avril', '2000')
console.log(combinePriceAndName)


// literal
let tag: 20
tag = 20

// literal and union
let price: 10 | 20 | 30
price = 20

let size: 'S' | 'M' | 'L'
size = 'S'


// intersection
type Lyrics = {
    text: string
}

type Melody = {
    notes: string[]
}

type Song = Lyrics & Melody

const newHit:  Song = {
    text: "Você é assim, um sonho pra mim ...",
    notes: [ "Dó", "Ré", "Mi"]

}

console.log(newHit)


// error handling - never
function generateError(message: string, code: number): never{
    throw {message: message, errorCode: code}
}
generateError('The application crashed', 500)

