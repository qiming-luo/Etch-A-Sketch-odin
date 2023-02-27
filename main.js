//import {girdCreator} from '/home/eagle/Documents/repos/odin/Etch-A-Sketch-odin/gridCreator';
//import {backgroundColorChange} from './backgroundColorChange'

function girdCreator(ele,num){
    let gridMother = document.createElement('div');
    ele.appendChild(gridMother);
    gridMother.style.display = 'grid';
    gridMother.style.aspectRatio = '1/1';
    gridMother.style.gridTemplateColumns = `repeat(${num}, 1fr)`; 
    gridMother.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    gridMother.style.gap = '0.2rem';
    gridMother.className = 'gridMother';
    //creat childre grid
    for(let i=1; i<=num*num; i++){
        let gridChild = document.createElement('div');
        gridMother.appendChild(gridChild);
        gridChild.style.backgroundColor = 'green';
        // hover:backgroundColorChange(gridChild);
        gridChild.addEventListener('mouseover', ()=>{
            backgroundColorChange(gridChild);
        })
        gridChild.innerHTML = i;
    }
}

const backgroundColorChange = (domElement) => {
    let r =Math.floor(Math.random()*256); // random 0-255
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    domElement.style.backgroundColor = `rgb(${r},${g},${b})`;
}


let grid = document.getElementById('grid');
let btn = document.getElementById('btn');


// step 1: create initial grid
girdCreator(grid,10);


