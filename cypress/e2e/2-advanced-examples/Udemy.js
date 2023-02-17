const { visitFunctionBody } = require("typescript")

var price = 50
var itemName = 'Cup'

var messageToPrint = 'The ' + itemName + ' price ' + price + ' dollars' // concatination

var messageToPrint2 = `The price for your ${itemName} is ${price} dollars` //interpolation
console.log(messageToPrint)
console.log(messageToPrint2)

// Objects and Arrays

// Object

var customer = {
    firstName: 'Jhon',
    lastName: 'Smith',
    cars: ['Volvo', 'Toyota', 'Tesla']
}
// Dot notation
customer.firstName = 'Mike'
// Bracket notation
customer.lastName = ['Silver']
console.log(`${customer.firstName} ${customer.lastName}`)
console.log(customer.cars) //provide name as a string

// Arrays

var car = ['Volvo', 'Toyota', 'Tesla']
car[1] = 'BMW'
console.log(car[1])

//Reletional or commerison

// > - more than
// < - less than
// >= - more than equal
// <= - less than equal

var result = 10 > 5
var result2 = 5 < 4
console.log(result)
console.log(result2)

//Equalit opreations

var x = 1
console.log(x == '1') //lose comparison (number)
console.log(x === '1') // strict comparison (string)

// Logical "AND"

console.log(true && true) // all values have to be TRUE for expression to be TRUE

// Logical "OR" 

console.log(true || true) // any values should be TRUE for the expression to be TRUE

var ageIsMoreThanEightin = false
var isUSCitizen = false

var permissionAlloved = ageIsMoreThanEightin && isUSCitizen
var permissionAlloved1 = ageIsMoreThanEightin || isUSCitizen

console.log("The customer is alloved to get the DL: " + permissionAlloved)
console.log("The customer is alloved to get the DL: " + permissionAlloved1)

// Logical "NOT"

console.log(!true)
console.log(6 !== 10)

// Conditional statement
// if (condition) {
//     // execute some code here
// } else {
//     // execute some code here
// }

// If hour between 6 and 12 print "Good Morning"
// If hour between 12 and 18 print "Good Afternoon"
// Otherwise: Good Evening

var hour = 6

if (hour >= 6 && hour < 12) {
    console.log("Good Morning")
} else if (hour >= 12 && hour < 18) {
    console.log("Good Afternoon")
} else {
    console.log("Good Evening")
}

var ageIsMoreThanEightin = true
var isUSCitizen = true

if (ageIsMoreThanEightin && isUSCitizen){
    console.log("Customere is eligable for DL")
}else{
    console.log("Customere isn't eligable for DL")
}

// Loops

// for(statement1; statement2; statement3){

// }

for(let i = 0; i <5; i++){
    console.log("Hello World " + i)
}

// for of loop
var cars = ['Volvo', 'Toyota', 'Tesla']

for(let car of cars){
    console.log(car)
    if(car == "Toyota"){
        break
    }
}

// ES6 syntax for Loops

cars.forEach( car => {
    console.log(car)
})

// Functions 

// Declerative function

function hello0ne(){
    console.log("Hello one!!")
}
hello0ne()

// Anoymus functon

var helloTwo = function(){
    console.log("Hello two!")
}
helloTwo()

// ES6 function syntax or arrow function

var helloThree = () => {
    console.log("Hello three!")
}
helloThree()

// Function with arguments
function printName(name, lastName){
    console.log(name + ' ' + lastName)
}
printName('Jhon', 'Loh')

// Function with return

function multyplyByTwo(number){
    var result = number * 2
    return result
}
var myResult = multyplyByTwo(5)
console.log(myResult)

// Import function 
export function printAge(age){
    console.log(age)
}

import{printAge} from '../name/name/nameOfTheFile.js'
printAge(5)

// import everything
import * as helper from '../name/name/nameOfTheFile.js'
helper.printAge(10)

// Class and method

class CustomerDetails {
    
    printFirstName(firstName){
        console.log(firstName)
    }

}
import{CustomerDetails} from '../name/name/nameOfTheFile.js'

var CustomerDetails = new CustomerDetails()

CustomerDetails.printFirstName('Stev')