
const gridWrapper = document.querySelector('.wrapper');
const singleColor = document.getElementById('single-color');
const rainbowColor = document.getElementById('rainbow-color');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
const rangeSize = document.getElementById("range");

const defaultColor = '#000';
const defaultSize = 16;
const defaultMode = 'singleColor';

let currentColor = defaultColor;
let currentSize = defaultSize;
let currentMode = defaultMode;


// singleColor.addEventListener('click', )

function gridSetup (size) {
    gridWrapper.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridWrapper.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(i=0; i < size*size; i++){
        const grid = document.createElement('div');
        grid.classList.add('grid');
        gridWrapper.appendChild(grid);
        grid.addEventListener('mouseover', changeColor)
    }
}
gridSetup(rangeSize.value);

function changeColor(e){
    e.target.style.background = currentColor;
        
}