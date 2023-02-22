// If  hour is between 6am and 12 pm : Good Morning
// If hour is between 12pm and 6pm : Good Afternoon
// Eles = : Good Evening

let hour = 112
if(hour >= 6 && hour < 12){
console.log('Good Morning')
}else if(hour >= 12 && hour < 18) {
    console.log('Good Afternoon')
}else{
    console.log('Good Evening')
}