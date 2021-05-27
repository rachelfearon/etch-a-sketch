const container = document.querySelector("#container");
const box = document.createElement('div');
const bigContainer = document.getElementById('bigcontainer');
const clearBtn = document.getElementById('cleargrid');
const input = document.getElementById('numberInput').defaultValue = "30";

clearBtn.addEventListener('click', function(e) {
    e.preventDefault;
    bigContainer.classList.remove('bigcontainershaking');
    void bigContainer.offsetWidth;
    bigContainer.setAttribute('class', 'bigcontainershaking');
    clearGrid();
}, false);

function createColorGrid(num, color) {
    for (let i = 0; i < (num * num); i++) {
        const box = document.createElement('div');
        box.setAttribute('class', 'colorBox');
        box.style.background = color.toString();
        container.appendChild(box);
    }
    
    container.style.gridTemplateColumns = `repeat(auto-fill, minmax(auto, ${100 / num}%))`;
    container.style.gridTemplateRows = `repeat(auto-fill, minmax(auto, ${100 / num}%))`;
}

function createGrayGrid(num, color) {
    for (let i = 0; i < (num * num); i++) {
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        box.style.background = `black`;
        container.style.setProperty('background', 'lightgray');
        container.appendChild(box);
    }
    
    container.style.gridTemplateColumns = `repeat(auto-fill, minmax(auto, ${100 / num}%))`;
    container.style.gridTemplateRows = `repeat(auto-fill, minmax(auto, ${100 / num}%))`;
}

function clearGrid() {
        const node = document.getElementById('container');
        node.querySelectorAll('.box').forEach(n => n.remove());
        node.querySelectorAll('.colorBox').forEach(n => n.remove());
        getInputValue();
        if(document.getElementById('grayscale').checked == true) {
            createGrayGrid(inputValue, 'lightgray');
        } else {
            createColorGrid(inputValue, 'white');
        }
}

function clickPress(event) {
    clearGrid();
    getInputValue();
    if (inputValue < 0 || inputValue > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    } else if (event.keyCode == 13) {
        
        if(document.getElementById('grayscale').checked == true) {
            createGrayGrid(inputValue, 'lightgray');
        } else {
            createColorGrid(inputValue, 'white');
        }
    }
}

function getInputValue() {
    inputValue = Math.round(document.getElementById("numberInput").value);
}

function applyColorMouseEvent() {
    container.addEventListener("mouseover", event => {
        if (event.target.className === 'colorBox') {
            event.target.style.background = getRandomHexColor();
        }
    });
};

function increaseOpacity() {
    container.addEventListener("mouseover", event => {
        let divStyle = getComputedStyle(event.target);
        let currentDivStyle = divStyle.getPropertyValue('--opacityValue');
        event.target.style.setProperty('--opacityValue', `${(parseFloat(currentDivStyle)) + 0.1}`);
    }) 
    }

function getRandomHexColor() {
    let newColorCode = Math.floor(Math.random()*16777215).toString(16);
    return newColor = "#" + newColorCode.toString();
} 

createGrayGrid(30, 'lightgray');
increaseOpacity();
applyColorMouseEvent();