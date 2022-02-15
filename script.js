const container = document.querySelector('#container')
const colorToggle = document.querySelector('#color-toggle')
const trash = document.querySelector('#trash');
const slider = document.querySelector('#size-slider');

let size = (512 / slider.value);
let toggled = false;

colorToggle.addEventListener('click', () => {
    newGrid();
    if (toggled == true) {
        colorToggle.classList.toggle('active')
        return toggled = false;
    } else if (toggled == false) {
        colorToggle.classList.toggle('active')
        return toggled = true;
    }
});

trash.addEventListener('click', () => {
    clearGrid();
    newGrid();
});

slider.addEventListener('input', () => {
    updateSize();
});
slider.addEventListener('mousedown', () => {
    clearGrid();
})
slider.addEventListener('mouseup', () => {
    newGrid();
});

window.onload = newGrid();

function newGrid() {
    for (let i = 0; i < (slider.value * slider.value); i++) {
        let box = document.createElement('div');
        box.setAttribute('class', 'box');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.addEventListener('mouseover', (e) => {
            if (toggled == false) {
                e.currentTarget.style.backgroundColor = '#212529';
            } else if (toggled == true) {
                e.currentTarget.style.backgroundColor = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`;
            }
        });
        container.appendChild(box);
    }
}

function clearGrid() {
    let boxes = document.querySelectorAll('.box');
    for(let i = 0; i < (boxes.length); i++) {
        container.removeChild(boxes[i]);
    } 
}

function updateSize() {
    const sizeContainer = document.querySelector('#size-value');
    sizeContainer.textContent = `${slider.value} x ${slider.value}`;
    size = (512 / slider.value);
}

function getRandomRGB() {
    return Math.floor(Math.random() * 256);
}