const container = document.querySelector('#container');
const slider = document.querySelector('#size-slider');
let size = (512 / slider.value);

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
            e.currentTarget.classList.add('colored');
        })
        container.appendChild(box);
    }
}
function newColorGrid() {
    for (let i = 0; i < (slider.value * slider.value); i++) {
        let box = document.createElement('div');
        box.setAttribute('class', 'box');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.addEventListener('mouseover', (e) => {
            e.currentTarget.classList.add('.colored');
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

const trash = document.querySelector('#trash');
trash.addEventListener('click', () => {
    clearGrid();
    newGrid();
});