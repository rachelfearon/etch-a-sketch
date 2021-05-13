const container = document.querySelector("#container");

const box = document.createElement('div');





for (let i = 0; i < 5; i++) {
    box.style.color = 'blue';
    box.style.background = 'green';
    box.setAttribute('class', 'box');
    box.setAttribute('padding', '1px 1px');
    container.appendChild(box.cloneNode(true));
}