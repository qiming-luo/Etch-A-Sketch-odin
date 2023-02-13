// randomly change background color function
const backgroundColorChange = (domElement) => {
    let r =Math.floor(Math.random()*256); // random 0-255
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    domElement.style.backgroundColor = `rgb(${r},${g},${b})`;
}


//let userInput = prompt('please enter a number between 1 and 64');

let main = document.getElementById('main');

// create grid container and append it to main
let gridContainer = document.createElement('div');

gridContainer.style.width = '800px';
gridContainer.style.aspectRatio = '1/1';
gridContainer.style.border = '1px solid green';
gridContainer.style.margin = '2rem auto';  // make it center horizonly
gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';
gridContainer.style.gridTemplateRows = 'repeat(16,1fr)';
gridContainer.style.gap = '0.1rem';
for(let i = 1; i<= 16*16; i++){
    let gridBoxes = document.createElement('div');
    backgroundColorChange(gridBoxes);
    // hover, change background color
    gridBoxes.addEventListener('mouseover',function(){backgroundColorChange(gridBoxes)}); //When passing parameter values, use an "anonymous function" that calls the specified function with the parameters
    gridBoxes.innerHTML = `${i}`;
    gridContainer.appendChild(gridBoxes);
}

main.appendChild(gridContainer);