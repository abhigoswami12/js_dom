

let area = document.querySelector('body')

function changeColor() {

    area.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    let color = '#';
    let values = '0123456789abcdef'.split('');

    for (i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 15);
        color += values[index];
    }

    return color;
}

document.addEventListener('click', changeColor)