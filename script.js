const size = 8;
const container = document.querySelector('#container');

container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for(let i = 0; i < size * size; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

const gridElements = document.querySelectorAll('.square');

gridElements.forEach(gridElements => gridElements.addEventListener('mouseover', changeColor));
gridElements.forEach(gridElements => gridElements.addEventListener('mouseout', revertColor))

function changeColor(){
    this.classList.add('hover');
}

function revertColor(){
    this.classList.remove('hover');
}