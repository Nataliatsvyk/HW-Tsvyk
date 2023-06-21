// Завдання 1//

let hamburger = 4;
let fries = 1;

if(hamburger > 3 && fries > 0){
    console.log ('Ми поїли')
} else{
    console.log ('Ми йдемо в інше кафе')
}


// Завдання 2//

let price = 1000;

if(price > 999 && price < 1901){
    console.log('Ціна товару знаходиться між 1000 та 1900')
} 


// Завдання 3//

var price1 = 1000;

if(price1 < 1901 && price1 > 999){
    console.log('Ціна не в межах')
} else{
    console.log('Ціна в потрібних межах')
}


var price2 = 1200;

if (!(price2 >= 1000 && price2 <= 1900)) {
  console.log("Ціна товару не знаходиться між 1000 та 1900.");
} else {
  console.log("Ціна товару знаходиться між 1000 та 1900.");
}


// Завдання 4//

var season = 4;

if(season == 1){
    console.log('Winter')
}
 else if(season == 2){
    console.log('Spring')
}
  else if(season == 3){
    console.log('Summer')
}
  else{
    console.log('Fall')
}

 
 // Завдання 5//

 var a = 5;
 var b = 10;
 var c = 7;
 var middle;
 
 if (a < b) {
   if (b < c) {
     middle = b;
   } else if (a < c) {
     middle = c;
   } else {
     middle = a;
   }
 } else {
   if (a < c) {
     middle = a;
   } else if (b < c) {
     middle = c;
   } else {
     middle = b;
   }
 }

 console.log("Середнє число: " + middle);



// Завдання 6//

let week = 7;

switch(week){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;

}


// Завдання 7//

var operator = "-";
var x = 10;
var y = 5;
var result;

switch (operator) {
  case "+":
    result = x + y;
    break;
  case "-":
    result = x - y;
    break;
  case "*":
    result = x * y;
    break;
  case "/":
    result = x / y;
    break;
  default:
    console.log("Невідомий оператор");
}

console.log("Результат: " + result);


// Завдання 8//

var word = "Hello world";
var vowelsRegex = /[aeiou]/gi;
var result = word.replace(vowelsRegex, "");

console.log("Результат: " + result);


// Завдання 9//
 
var meters = 4000;
var kilometers = meters / 1000;

if (kilometers === 1) {
  result = "Результат: " + kilometers + " кілометр";
} 
 else if (kilometers > 5 && kilometers < 99) {
    result = "Результат: " + kilometers + " кілометрів";
  } else {
  result = "Результат: " + kilometers.toFixed(2) + " кілометра";
}

console.log(result);
