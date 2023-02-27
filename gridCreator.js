export function girdCreator(ele,num){
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
        gridChild.innerHTML = i;
    }
}
