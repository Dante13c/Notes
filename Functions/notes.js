//code can be defined once and used many times, it helps avoiding code repitition.
//invoking the function created bellow 
greeting();


// basic funtion with a console log 
function greeting() {
    console.log("hello there")
}


//==================================================================================]
// function to calculate the area of a rectangle 


//unasighned variable 
let area; 
let width;
let height;


//prompt for user input 
width = window.prompt("enter width ");
height = window.prompt("enter height");

//area variable assignged with a function call 
area = resultArea(width, height);


//console log output of the results 
console.log(area) //=> console output with the result of height multiplied by width 


//funtion created to callculate the rectangle 
function resultArea(width, height) {

    //temporary variable called result takes care of the calculation of width and height
    let result = width * height;

    // returning result 
    return result;
}