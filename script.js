
const singleColor = document.getElementById('single-color');
const rainbowColor = document.getElementById('rainbow-color');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
console.log(eraser);

const defaultColor = '#000';
const defaultSize = 16;
const defaultMode = 'singleColor';

let currentColor = defaultColor;
let currentSize = defaultSize;
let currentMode = defaultMode;

const gridWrapper = document.querySelector('.wrapper');
function gridSetup (size) {
    gridWrapper.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridWrapper.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(i=0; i < size*size; i++){
        const gridWrapper = document.querySelector('.wrapper');
        const grid = document.createElement('div');
        grid.classList.add('grid')
        grid.
        gridWrapper.appendChild(grid)
    }


}
gridSetup(16);
