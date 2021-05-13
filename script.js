const container = document.querySelector("#container");
const box = document.createElement('div');


function randomColor() {
    let newColorCode = Math.floor(Math.random()*16777215).toString(16);
    return newColor = "#" + newColorCode.toString();
    
} 


function createGrid(input) {
    let num = prompt("Choose a number");
    for (let i = 0; i < (num * num); i++) {
        box.style.color = 'blue';
        box.style.background = randomColor();
        box.setAttribute('class', 'box');
        
        container.appendChild(box.cloneNode(true));
        
    }
    
        container.style.gridTemplateColumns = `repeat(auto-fill, minmax(auto, ${100 / num}%))`
        container.style.gridTemplateRows = `repeat(auto-fill, minmax(auto, ${100 / num}%))`
}



createGrid();