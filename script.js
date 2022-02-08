const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    const grid = document.createElement('div');
    container.appendChild(grid);
}

const box = document.querySelectorAll('div>div')

box.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
        e.currentTarget.classList.add('colored')
    });
});
