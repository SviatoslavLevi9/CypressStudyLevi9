//Task 1
function getRemaider() {
    console.log('Water the plants')
}
getRemaider();



function compare(name = 'string') {
    if (typeof name === 'string') {
        console.log('It is String')
    } else {
        console.log('It is not a String')
    }
}
compare('Hello');


function greeting(name = '') {
    console.log(`Hello, ${name}!`)
}
greeting('Sviat')

//Task 2
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {

    console.log(`Remember to buy ${item1}`);

    console.log(`Remember to buy ${item2}`);

    console.log(`Remember to buy ${item3}`);

}

makeShoppingList();


function calculateArea(width = 10, height = 10) {
    let area = width * height
    console.log(area);
    return area;
}
let a = calculateArea(20, 30)
console.log(a);

// Task 3

function monitorCount(row = 5, columns = 4) {
    const numOfMonitors = row * columns;
    console.log(numOfMonitors);
    return numOfMonitors
}
monitorCount();

// Task 4

const logVisibleLightWaves = () => {

    let lightWaves = 'Moonlight';

    let region = 'The Arctic';

    // Add if statement here: 
    if (region === 'The Arctic'){
        let lightWaves = 'Northern Lights'
        console.log(lightWaves)
    }



    console.log(lightWaves);

};

logVisibleLightWaves();

// Arrays

let cities = ['Lviv', 'Kiev', 'Odesa']
console.log(cities[0]);

// Task 5

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.']; 
let listItem = famousSayings[0];
console.log(listItem)
console.log(famousSayings[2]);
console.log(famousSayings[3])

// Task 6

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1]= 'avocados'
console.log(groceryList);
console.log(groceryList.length)

const itemTracker = ['item 0', 'item 1', 'item 2']

itemTracker.push('item 4','item 5');
console.log(itemTracker)

const itemTracker2 = ['item 0', 'item 1', 'item 2']

itemTracker2.pop();
console.log(itemTracker2);

// Task 7

const concept = ['arrays', 'can', 'be', 'mutated']; 

function changeArr(arr){ 

  arr[3] = 'MUTATED'; 

} 

changeArr(concept); 
console.log(concept)

function removeElement(newArr){
newArr.pop()
}

removeElement(concept)
console.log(concept)
