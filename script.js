let width = document.getElementById('width');
let height = document.getElementById('height');
let color = document.getElementById('color');
let bradius = document.getElementById('bradius');
let button = document.querySelector('button');
let shape = document.querySelector('.shape');

button.addEventListener('click', () => {
    shape.style.background = color.value;
    shape.style.width = width.value +'px';
    shape.style.height = height.value +'px';
    shape.style.borderRadius = bradius.value;
});