"use strict"





// make arrays for destanation, mode of transportation, entertainment amd resturant 
// make individual genrator functions for each array
//make a function so that user can re-selet if they don't like one or more of the arrays
// comfirm completion of day trip
// populate all of the day trip information





let transportationarray = ["rental car", "personal car","bus","rent helicppter"];
let resturantarray = ["korean resturant", "mexican resturant", "indian resturant", "chineese resturant", "steak house", "ilitain resturant"];
let destanationarray = ["Kansas city", "Wichita", "Lawerence", "Topeka", "Salina"];
let entertainmentarray = ["sports game", "amusement park", "art gallery", "concert", "zoo"];


function randomItem(array){
    return array[ Math.floor(Math.random()* array.length)];
    
}




 