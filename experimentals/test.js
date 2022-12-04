
// variable called input (try out other primitives to change colsole output). 
let input;

///////////
input = 5;//
///////////

// function expresion called ai_collector.
const ai_input_collector = function() {
   
    //switch statement to check what type of input is the input variable.
   switch(input) {
        case Number(input):
            return "i like numbers"
            break;
        case String(input):                                               // this gives response for items it already knows about.
            return "i like strings also"                                  // logic for asking what it is and  base on one input cane make a comparison 
            break;                                                        // eg.  {base: boolean, string}
        case Boolean(true):
        case Boolean(false):
            return "this is a boolean";
            break;
        default :
            return "i dont know what this is.";
   }
    
    
    
}

console.log(ai_input_collector())

//============================================================
/*let human;

human = function() {
    human.Name = "dante"

    return human.Name;
}

/* console.log(human(human.Name)) */


/*function instaGreet() {
    return "hi there";
}

console.log(instaGreet())*/