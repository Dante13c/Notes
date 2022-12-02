
//=============================================================================
// variable adulet created and its value invokes the funtion below.
let adult = checkAge(21)

// log output shows the argument passed in from the invokation.
console.log(adult)


// function called checkage is created and contains a parameter of age.
function checkAge(age) {

    // if statement checks if the condition has been met and returns true.
    if(age >= 18) {
        return true;
    } 
    // if condition is false it returns false.
    else {
        return false
    }    
}
//==============================================================================


//variable with a function invoked 
let num = number(9);

//log output of result
console.log(num)

/* //this function is has the same setup as the one above but uses
a ternary operator */
function number(max) {
    return max >= 10 ? true : false; // ternary is a shorter way of writting 
}                                    // the same if else statement 