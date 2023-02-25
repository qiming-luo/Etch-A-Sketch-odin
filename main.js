// randomly change background color function
const backgroundColorChange = (domElement) => {
    let r =Math.floor(Math.random()*256); // random 0-255
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    domElement.style.backgroundColor = `rgb(${r},${g},${b})`;
}


//

let grid = document.getElementById('grid');
let btn = document.getElementById('btn');


// create grid container and style it 
let gridContainer = document.createElement('div');

gridContainer.style.width = '1000px';
gridContainer.style.aspectRatio = '1/1';
gridContainer.style.border = '1px solid green';
gridContainer.style.margin = '2rem auto';  // make it center horizonly
gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';
gridContainer.style.gridTemplateRows = 'repeat(16,1fr)';
gridContainer.style.gap = '0.1rem';
for(let i = 1; i<= 16*16; i++){
    let box = document.createElement('div');
    box.style.backgroundColor = 'lightGreen';
    // hover, change background color
    box.addEventListener('mouseover',function(){backgroundColorChange(box)}); //When passing parameter values, use an "anonymous function" that calls the specified function with the parameters
    box.innerHTML = `${i}`;
    gridContainer.appendChild(box);
}

grid.appendChild(gridContainer);


for(let i =1; i<=16*16; i++){
    gridContainer.removeChild(gridContainer.firstChild);
}


// create a function to build grid containner and its childs, handle background color changeing

function gridCreator(num){
    
    
}

/*
// add event listener to handle user input and creat new grid as user wish
const btnHandler = () => {
    
    let userInput = prompt('Please enter a number between 2 and 20');
    if(userInput>1 && userInput<21){
        gridCreator(userInput);
    }
    
   // gridCreator(10);
}

btn.addEventListener('click', btnHandler);
*/