const {
    utils
} = require("mocha")
const {
    updateIntersectionTypeNode
} = require("typescript")

let time = 9

if (time < 10) {
    greeting = "Good morning"
    console.log(greeting)
} else if (time < 20) {
    greeting = "Good day"
    console.log(greeting)
} else {
    greeting = "Good evening"
    console.log(greeting)
}

let time1 = 11
let greeting1
if (time1 < 10) {
    greeting1 = "Good morning"
} else if (time1 < 20) {
    greeting1 = "Good day"
} else {
    greeting1 = "Good evening"
}
console.log(greeting1)

// Task 1
let sale = false

if (sale == true) {
    console.log("Time to buy!")
} else {
    console.log("Time to wait for a sale.")
}

// type Conversion Convert String to number
const inputYear = "1992"
console.log(inputYear + 122)
console.log(Number(inputYear) + 122)

console.log(String(23))

// type coercion
console.log("I am " + 30 + " years old")
console.log("1" + 1)
console.log("10" - "4" - "3" - 2 + "5")
console.log("23" - "10" - 3) //  якщо заюзаєм (-) то конкатинації не буде і ДЖС все перетворить в цтфри
console.log("23" * "12")

// Truthy and Falsy Values

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean("Sviat"))
console.log(Boolean({}))

// 0 - it is false
const money = 0
if (money) {
    console.log("Dont spend them all !")
} else {
    console.log("You should get a job !")
}

let height
//height =1;
if (height) {
    console.log("Hey! Height is defined")
} else {
    console.log("Height is undefined")
}

// Equality Operators: == vs. ===

// === - це порівння без приведення до типу
// == - дорівнює (doesn't convert)
const age = 18
if (age === "18") console.log("You have 18 years old (strict)") // use it
if (age == 18) console.log("You have 18 years old (loose)")
console.log(age === 31)
console.log("\n")

// const favourite =  Number(prompt ('What is your favourite number ?'));
// console.log(favourite);

// Logical Operators
// &&- AND
// || - OR
const hasDriverLicence = true
const hasGoodVision = true

console.log(hasDriverLicence && hasGoodVision)
console.log(hasDriverLicence || hasGoodVision)
console.log(!hasDriverLicence)

// if( hasDriverLicence && hasGoodVision){
//     console.log('Sviat can drive')
// }else{
//     console.log("Sviat shouldn't drive")
// }

const isTired = false

if (hasDriverLicence && hasGoodVision && !isTired) {
    console.log("Sviat can drive")
} else {
    console.log("Sviat shouldn't drive")
}
console.log("\n")
//Task 2

let mood = "sleepy"
let tirednessLevel = 9

if (mood === "sleepy" && tirednessLevel >= 8) {
    console.log("Time to sleep!")
} else {
    console.log("not bed time yet")
}

console.log("\n")
//Task 3

const language = "ukrainian"

switch (language) {
    case "chinese" || "mandarin":
        console.log("MOST number of native speakers!")
        break
    case "spanish":
        console.log("2nd place in number of native speakers")
        break
    case "english":
        console.log("3rd place")
        break
    case "hindi":
        console.log("Number 4")
        break
    case "arabic":
        console.log("5th most spoken language")
        break
    default:
        console.log("Great language too :D")
}

//Task 4

let country = "Ukraine"
let population = 12000000
population > 33000000 ?
    console.log(country + " population is above average") :
    console.log(country + " population is below average")

//Task 5

let userName = '';
typeof userName === "string" ?
    console.log(userName + " Hello") :
    console.log("Not A String")


let userQuestion;
userQuestion = ' What question do you want to ask ?';
console.log(userName + userQuestion);

let randonNumner;
randonNumner = Math.floor(Math.random() * 8);
let eightBall;
eightBall = '';

switch (randonNumner) {
    case 0:
        console.log('It is certain')
        break
    case 1:
        console.log('It is decidedly so')
        break
    case 2:
        console.log('Reply hazy try again')
        break
    case 3:
        console.log('Cannot predict now')
        break
    case 4:
        console.log('Do not count on it')
        break
    case 5:
        console.log('My sources say no')
        break
    case 6:
        console.log('Outlook not so good')
        break
    case 7:
        console.log('Signs point to yes')
        break

}

// if(randonNumner === 0){
//     console.log('It is certain')
// }else if(randonNumner === 1){
//     console.log('It is decidedly so')
// }

