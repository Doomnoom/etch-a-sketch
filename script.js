const size = 8;
const container = document.querySelector('#container');

container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

//populates webpage with drawing grid

for(let i = 0; i < size * size; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

const color = document.querySelector('.colorPicker');

const gridElements = document.querySelectorAll('.square');

gridElements.forEach(gridElements => gridElements.addEventListener('mouseover', changeColor));
gridElements.forEach(gridElements => gridElements.addEventListener('mouseout', revertColor));
gridElements.forEach(gridElements => gridElements.addEventListener('click', test));

function changeColor(){
    this.classList.add('hover');
}

function revertColor(){
    this.classList.remove('hover');
}

function test(){
    this.style.backgroundColor = color.value;
}