//Task 1
function getRemaider(){
    console.log('Water the plants')
}
getRemaider();



function compare(name = 'string'){
    if(typeof name ==='string'){
        console.log('It is String')
    }else{
        console.log('It is not a String')
    }
}
compare('Hello');


function greeting(name = ''){
    console.log(`Hello, ${name}!`)
}
greeting('Sviat')

//Task 2
function makeShoppingList(item1= 'milk', item2='bread', item3='eggs'){ 

    console.log(`Remember to buy ${item1}`); 
  
    console.log(`Remember to buy ${item2}`); 
  
    console.log(`Remember to buy ${item3}`); 
 
  } 

  makeShoppingList();
  
  
  function calculateArea(width= 10, height= 10){
    let area = width * height
    console.log(area);
    return area;
  }
 let a = calculateArea(20,30)
 console.log(a);