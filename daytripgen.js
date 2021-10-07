"use strict"





// make arrays for destanation, mode of transportation, entertainment amd resturant 
// make individual genrator functions for each array
//make a function so that user can re-selet if they don't like one or more of the arrays
// comfirm completion of day trip
// populate all of the day trip information



let array = [];

let transportationarray = ["rental car", "personal car","bus","rent helicppter"];
let resturantarray = ["korean resturant", "mexican resturant", "indian resturant", "chineese resturant", "steak house", "ilitain resturant"];
let destanationarray = ["Kansas city", "Wichita", "Lawerence", "Topeka", "Salina"];
let entertainmentarray = ["sports game", "amusement park", "art gallery", "concert", "zoo"];



function randomItem(array){
    return array[ Math.floor(Math.random()* array.length)];
    
}


function dayTripGenarator(randomItem, array){
    array[index] = dayTripGenarator(randomItem);
}

randomItem(array,  transportationarray);
randomItem(array, resturantarray);
randomItem(array, destanationarray);
randomItem(array, entertainmentarray);


let userInput;
let tripGenrator = "";
let userInput2 = "";

     tripGenrator = "Your destanation is" + " " + randomItem(destanationarray) + ", " + "resturant will be"+ " " + randomItem(resturantarray) +", " 
     + "you will be riding by" + " " + randomItem(transportationarray) + ", " + "and your entertainment will be" + " " + randomItem(entertainmentarray);
           alert(tripGenrator);

   userInput = prompt("Do you like this trips?");


 while( userInput == "no"){
     if(userInput === "yes"){
         console.log("Day trip seletion complete");
     }
     else {
        userInput2 = prompt("Which random seletion do you not like?");
     }
     switch(userInput2){
        case "destanation":
            randomItem(destanationarray);
            break;
        case "resturant":
            randomItem(resturantarray);
            break;
        case "transportation":
            randomItem(transportationarray);
            break;
        case "entertainment":    
            randomItem(entertainmentarray);
            break;    
    }
    } 




// switch(userInput2){
//     case "destanation":
//         randomItem(destanationarray);
//         break;
//     case "resturant":
//         randomItem(resturantarray);
//         break;
//     case "transportation":
//         randomItem(transportationarray);
//         break;
//     case "entertainment":    
//         randomItem(entertainmentarray);
//         break;    
// }





// function reseletRandomItem(index, userInput2 ){
//     if(userInput2 == "transportation"){
//         randomItem(transportationarray);
//     }
//     else if (userInput2 == "destanation"){
//         randomItem(destanationarray);
    
//     }
//     else if (userInput2 ==)
// }


 