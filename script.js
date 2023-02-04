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

gridElements.forEach(gridElements => gridElements.addEventListener('click', changecolor));

function changecolor(){
    square.setAtribute('style', 'background: black;');
}