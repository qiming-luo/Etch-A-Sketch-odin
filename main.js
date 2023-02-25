// randomly change background color function
const backgroundColorChange = (domElement) => {
    let r =Math.floor(Math.random()*256); // random 0-255
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    domElement.style.backgroundColor = `rgb(${r},${g},${b})`;
}


// initial grid

let main = document.getElementById('main');


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

main.appendChild(gridContainer);


// create a function to build grid containner and its childs, handle background color changeing

function gridCreator(num){
    // remove old grid container
    main.removeChild(gridContainer);
    // create grid container and style it 
    let gridContainer = document.createElement('div');
    gridContainer.style.width = '1000px';
    gridContainer.style.aspectRatio = '1/1';
    gridContainer.style.border = '1px solid green';
    gridContainer.style.margin = '2rem auto';  // make it center horizonly
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = 'repeat(num, 1fr)';
    gridContainer.style.gridTemplateRows = 'repeat(num,1fr)';
    gridContainer.style.gap = '0.1rem';
    //
    //creat children grids and append them to grid container
    for(let i = 1; i<= num*num; i++){
        let box = document.createElement('div');
        box.style.backgroundColor = 'lightGreen';
        // hover, change background color
        box.addEventListener('mouseover',function(){backgroundColorChange(box)}); //When passing parameter values, use an "anonymous function" that calls the specified function with the parameters
        box.innerHTML = `${i}`;
        gridContainer.appendChild(box);
    }
    //
    //
    main.appendChild(gridContainer);
}

// add event listener to handle user input and creat new grid as user wish
