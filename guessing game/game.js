const randomNumber = Math.floor(Math.random() * 10 + 1)
let guessCount = 0

const mouseClick = document.getElementById("submitBtn").onclick = function() {

    guessCount ++;
    let guess = document.getElementById("guessBox").value;
    
    if(guess == randomNumber) {
        window.alert(`you guessed correct, ${guess} is the correct guess, it took ${guessCount} guesses`);
        document.getElementById("youWin").innerHTML = `<br><br> You Win!`
    } else if(guess < randomNumber) {
        window.alert("your guess is smaller ") 
    } else if(guess > randomNumber) {
        window.alert("your guess is larger ")
    } 

    

}    
