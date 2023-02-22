
// Logical AND (&&)
// Returns TRUE if both operands are TRUE

console.log(true && true)
console.log(true && false) // false

let highIncome1 = true
let goodCreditScore1 = true

let eligibleForLoan1 = highIncome1 && goodCreditScore1

console.log(eligibleForLoan1)

// Logical OR (||)
// Returns TRUE if one operands is TRUE

let highIncome2 = true
let goodCreditScore2 = false

let eligibleForLoan2 = highIncome2 || goodCreditScore2
console.log(eligibleForLoan2)

// NOT (!)

let applicationRefused = !eligibleForLoan2

console.log('Refused',applicationRefused)


// Falsy (false)
// undesined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy

// Short-circuting
console.log(false || 1 || 2)

let userColor = 'Red' //change to undefined
let defaultColor = 'Blue'
let currentColor = userColor || defaultColor
console.log(currentColor)