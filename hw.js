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
    console.log('Ціна в потрібних межах')
} 


// Завдання 3//

let price1 = 1905;

if(price1 < 1901 && price1 > 999){
    console.log('Ціна не в межах')
} else{
    console.log('Ціна в потрібних межах')
}


//let price2 = 1905;

if(price2 != 999){
    console.log('Ціна не в межах')
} else{
    console.log('Ціна в потрібних межах')
}//


// Завдання 4//

var season = 4;

if(season == 1){
    console.log(' Winter ')
}
 else if(season == 2){
    console.log(' Spring ')
}
  else if(season == 3){
    console.log(' Summer ')
}
  else{
    console.log(' Fall ')
}

 
 // Завдання 5//

var a = 5, b = 6, c = 7
var avg

if(a > b){
    if(a > c){
        if(b > c){
            avg = b
        } else  avg = c
    }
} else avg = a
    
 {
    if(b > c){
    if(a > c)
      avg = a
    else
      avg = c
        }
else avg = b
    }
    console.log('avg("+ a +", "+ b +", "+ c +") = " "')
    



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
        //ggggg
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

const calc = (num1, num2 , operator) =>{
    switch(operator){
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
                break;
        case '*':
            return num1 * num2;
                    break;
        case '/':
            return num1 / num2;
                        break;
    }
}

console.log(calc(1, 5,'*'));



// Завдання 8//



// Завдання 9//

let metr = 4000;
let kilometr = metr/1000
let arr = [metr, kilometr]
let result = "";



