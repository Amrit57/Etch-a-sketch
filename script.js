//default selections when page loads
const defaultColor = '#000';
const defaultSize = 16;
const defaultMode = 'singleMode';

//All the HTML element/buttons.
const singleColorMode = document.getElementById('single-color');
const rainbowColorMode = document.getElementById('rainbow-color');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
const gridSize = document.getElementById("range");
const gridSizeValue = document.getElementById('range-name')
const colorPicker = document.getElementById('color-picker');
const gridWrapper = document.querySelector('.wrapper');

//variables to change the default selection
let currentColor = defaultColor;
let currentSize = defaultSize;
let currentMode = defaultMode;

//functions to pass the new changes.
function setNewColor(newColor){
    currentColor = newColor;
};
function setNewSize(newSize){
    currentSize = newSize;
};
function setNewMode(newMode){
    activateButton(newMode)
    currentMode = newMode;
}

//adding events to buttons.
colorPicker.oninput = (e) => setNewColor(e.target.value)
singleColorMode.onclick = () => setNewMode('singleMode')
rainbowColorMode.onclick = () => setNewMode('rainbowMode')
eraser.onclick = () => setNewMode('eraser')
clear.onclick = () => reloadGrid();
gridSize.onmousemove = (e) => updateNewSize(e.target.value);
gridSize.onchange = (e) => changeSize(e.target.value);

//function that clears the grid and reloads new sketch
function changeSize(value){
    setNewSize(value);
    updateNewSize(value);
    reloadGrid();
}
//function that takes value from html and changes the gridSize value.
function updateNewSize(value){
    gridSizeValue.innerHTML = `${value} x ${value}`;
}
// function that reloads new  grid.
function reloadGrid() {
    clearGrid()
    gridSetup(currentSize)
  }
  
  function clearGrid() {
    gridWrapper.innerHTML = '';
  }
  
//function that adds grid and changes grid color when mouseover.
function gridSetup (size) {
    gridWrapper.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridWrapper.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(i=0; i < size*size; i++){
        const grid = document.createElement('div');
        grid.classList.add('grid');
        gridWrapper.appendChild(grid);
        grid.addEventListener('mouseover', changeColor)
        grid.addEventListener('mousedown', changeColor)
    }
}

//Condition to sketch on mousedown/over
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//function that changeColor
function changeColor(e){
    if(e.type === 'mouseover' && !mouseDown) return;
    if(currentMode === 'rainbowMode'){
        const R = Math.floor(Math.random()*256);
        const G = Math.floor(Math.random()*256);
        const B = Math.floor(Math.random()*256);

        e.target.style.background = `rgb(${R},${G}, ${B})`

    } else if (currentMode === 'singleMode'){

        e.target.style.background = currentColor;

    } else if (currentMode === 'eraser'){

        e.target.style.background = 'rgb(255, 255, 255)';
    }
}

// function to apply styling in active btns.
    function activateButton(newMode) {
    if (currentMode === 'rainbowMode') {
      rainbowColorMode.classList.remove('active')
    } else if (currentMode === 'singleMode') {
      singleColorMode.classList.remove('active')
    } else if (currentMode === 'eraser') {
      eraser.classList.remove('active')
    }
  
    if (newMode === 'rainbowMode') {
        rainbowColorMode.classList.add('active')
    } else if (newMode === 'singleMode') {
        singleColorMode.classList.add('active')
    } else if (newMode === 'eraser') {
        eraser.classList.add('active')
    }
  }

window.onload = () => {
    gridSetup(defaultSize);
    activateButton(defaultMode);

}