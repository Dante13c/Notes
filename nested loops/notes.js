let columns = window.prompt("enter number of columns");
let rows = window.prompt("enter number of rows");



for(let i = 1; i <= rows; i++) {
    for(let j = 1; j <= columns; j++) {
        document.getElementById("rect_out").innerHTML += j
    }
    document.getElementById("rect_out").innerHTML += "<br>"
} 