const container = document.querySelector('#container');
const deleteButton = document.querySelector('#deleteButton');
const colorPalette = document.querySelector('#palette');
const size = 16;
let gridCells = [];

function createGrid(size){
    for(let i = 0; i < size * size; i++){
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        container.appendChild(cell);
        gridCells.push(cell);
    }

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const gridBoxes = document.querySelectorAll('.grid-cell');
    gridBoxes.forEach(gridBoxes => gridBoxes.addEventListener('click', test));
}

function deleteGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function reloadGrid(){
    let newSize = prompt('New size: ');

    if(newSize > 100){
        newSize = 100;
    }
    else if(newSize < 2){
        newSize = 2;
    }
    else if(parseInt(newSize) === NaN){
        return;
    }


    deleteGrid();
    createGrid(newSize);
}

function test(){
    this.style.backgroundColor = colorPalette.value;
}

deleteButton.addEventListener('click', reloadGrid);
createGrid(size);