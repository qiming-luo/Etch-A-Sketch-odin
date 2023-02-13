
//let userInput = prompt('please enter a number between 1 and 64');

let main = document.getElementById('main');

// creat grid container and append it to main
let gridContainer = document.createElement('div');

gridContainer.style.width = '80%';
gridContainer.style.height = '960px';
gridContainer.style.border = '1px solid green';
gridContainer.style.margin = '2rem auto';  // make it center horizonly
gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';
gridContainer.style.gridTemplateRows = 'repeat(16,1fr)';
gridContainer.style.gap = '0.3rem';

main.appendChild(gridContainer);