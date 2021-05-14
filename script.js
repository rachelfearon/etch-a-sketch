const container = document.querySelector("#container");
const box = document.createElement('div');
let boxNodelist = document.querySelectorAll('.box');
let boxArray = Array.from(boxNodelist);


function randomColor() {
    let newColorCode = Math.floor(Math.random()*16777215).toString(16);
    return newColor = "#" + newColorCode.toString();
    
} 

function createGrid(num, color) {
    // let num = prompt("Choose a number");
    for (let i = 0; i < (num * num); i++) {
        // box.style.color = 'blue';
        
        box.setAttribute('class', 'box');
        box.style.background = color.toString();
        container.appendChild(box.cloneNode(true));
        boxNodelist = document.querySelectorAll('.box');
        boxArray = Array.from(boxNodelist);
    }
    
        container.style.gridTemplateColumns = `repeat(auto-fill, minmax(auto, ${100 / num}%))`;
        container.style.gridTemplateRows = `repeat(auto-fill, minmax(auto, ${100 / num}%))`;
}

createGrid(8, 'white');

boxArray.forEach( function(div){
    div.addEventListener("mouseenter", function() {
    div.style.background = 'blue';
    
    });
});