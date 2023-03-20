


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
