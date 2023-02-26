const backgroundColorChange = (domElement) => {
    let r =Math.floor(Math.random()*256); // random 0-255
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    domElement.style.backgroundColor = `rgb(${r},${g},${b})`;
}
