
// declared an empty variable.
let temp;


//event for submit button if clicked.
const mouseClick = document.getElementById("submitBtn").onclick = function() {
    // value from text box assigned to variable temp.
    temp = document.getElementById("textBox").value;


    //if statement summons one of the two functions by name based on which box is checked 
    if(temp && document.getElementById("celcius").checked) {
        temp = toCelcius(temp);
        document.getElementById("tempOutput").innerHTML = `temperature-Celcius: ${temp} `

    } else if(temp && document.getElementById("fahrenheit")) {
        temp = toFahrenheit(temp);
        document.getElementById("tempOutput").innerHTML = `temperature- fahrenheit: ${temp}`
    }

    //function coverts input temp to celcius.
    function toCelcius(temp) {
        return (temp - 32) * (5/9);
    }
    //function coverts input temp to fahrenheit.
    function toFahrenheit(temp) {
        return  temp * 9/5 + 32;
    }  
    
    
}



