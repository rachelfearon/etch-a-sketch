const container = document.querySelector("#container");
const box = document.createElement('div');
const bigContainer = document.getElementById('bigcontainer');
const clearBtn = document.getElementById('cleargrid');

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
    boxArray = Array.from(document.querySelectorAll('.colorBox'));
    applyColorMouseEvent();
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
    boxArray = Array.from(document.querySelectorAll('.box'));
    increaseOpacity();
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
    getInputValue();
    if (inputValue < 0 || inputValue > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    } else if (event.keyCode == 13) {
        clearGrid();
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
    boxArray.forEach( function(div){
        div.addEventListener("mouseenter", function() {
        div.style.background = getRandomHexColor();
        
        });
    });
};

function applyGrayMouseEvent() {
    boxArray.forEach( function(div){
        div.addEventListener("mouseenter", function() {
        div.style.background = `hsl(0, 0%, 35%)`;
        });
    });
};

function increaseOpacity() {
    boxArray.forEach( function(div){
        div.addEventListener("mouseenter", function() {
            let divStyle = getComputedStyle(this);
            let currentDivStyle = divStyle.getPropertyValue('--opacityValue');
            div.style.setProperty('--opacityValue', `${(parseFloat(currentDivStyle)) + 0.1}`);
            getOpacityValue();
        }) 
    })
}

function getRandomHexColor() {
    let newColorCode = Math.floor(Math.random()*16777215).toString(16);
    return newColor = "#" + newColorCode.toString();
} 
