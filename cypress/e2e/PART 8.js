// for loop 

for (let counter = 0; counter < 4; counter++) {
    console.log(counter)
}
console.log('\n')
// Task 1
for (let counter = 5; counter < 11; counter++) {
    console.log(counter)
}

console.log('\n')

// Task 2
for (counter = 0; counter < 3; counter++) {
    console.log(counter)
}

console.log('\n')

for (counter = 3; counter >= 0; counter--) {
    console.log(counter)
}
console.log('\n')

//Looping through Arrays 

const animals = ['Horse', 'Loin', 'Dog'];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
console.log('\n')

// Task 3

const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (i = 0; i < vacationSpots.length; i++) {
    console.log("I would like to visit " + vacationSpots[i])
}
console.log('\n')

//The While Loop 

let counterTwo = 1;
while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++
}
console.log('\n')

//Do...While Statements

// let countString = '';
// let i =0;
// do {
//     countString = countString + i;
//     i++;
// } while (i<5);
// console.log(countString);

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!';

do {
    console.log(firstMessage)
} while (true === false);

while (true === false) {
    console.log(secondMessage)
}

console.log('\n')

// Task 4

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++) {
    if (i >= 2) {
        break;
    }
    console.log(rapperArray[i])
    console.log("'And if you don't know, now you know.'")
}

// Objects 

let spaceship1 = {
    'Fuel Type': 'Disel',
    color: 'Silver'
};

spaceship1.color;
spaceship1["Fuel Type"]

console.log('\n')
// Task 5
let spaceship2 = {

    homePlanet: 'Earth',

    color: 'silver',

    'Fuel Type': 'Turbo Fuel',

    numCrew: 5,

    flightPath: ['Venus', 'Mars', 'Saturn']

};

let crewCounter = spaceship2.numCrew;
let planetArray = spaceship2.flightPath;
console.log(crewCounter);
console.log(planetArray);

// Task 6

let spaceship3 = {

    'Fuel Type': 'Turbo Fuel',

    homePlanet: 'Earth',

    color: 'silver',

    'Secret Mission': 'Discover life outside of Earth.'

};

spaceship3.color = ['glorious gold'];
console.log(spaceship3.color);

spaceship3.numEngins = 5;
delete spaceship3["Secret Mission"];

console.log(spaceship3)
console.log('\n')

// Task 7

let spaceship4 = {

    crew: {

        captain: {

            name: 'Lily',

            degree: 'Computer Engineering',

            cheerTeam() {
                console.log('You got this!')
            }

        },

        'chief officer': {

            name: 'Dan',

            degree: 'Aerospace Engineering',

            agree() {
                console.log('I agree, captain!')
            }

        },

        medic: {

            name: 'Clementine',

            degree: 'Physics',

            announce() {
                console.log(`Jets on!`)
            }
        },

        translator: {

            name: 'Shauna',

            degree: 'Conservation Science',

            powerFuel() {
                console.log('The tank is full!')
            }

        }

    }

};
for (let crewMember in spaceship4.crew){
    console.log(`${crewMember}: ${spaceship4.crew[crewMember].name}`);
}