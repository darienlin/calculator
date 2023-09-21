const display = document.querySelector('.screen')
const displayContent = document.createElement('div')
displayContent.classList.add('fontColor')
var content = ''
displayContent.textContent = content
display.appendChild(displayContent)

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    content = ''
    displayContent.textContent = content
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    content = content + '9'
    displayContent.textContent = content
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    content = content + '8'
    displayContent.textContent = content
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    content = content + '7'
    displayContent.textContent = content
});

const six = document.querySelector('#six');
six.addEventListener('click', () => {
    content = content + '6'
    displayContent.textContent = content
});

const five = document.querySelector('#five');
five.addEventListener('click', () => {
    content = content + '5'
    displayContent.textContent = content
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
    content = content + '4'
    displayContent.textContent = content
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    content = content + '3'
    displayContent.textContent = content
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    content = content + '2'
    displayContent.textContent = content
});

const one = document.querySelector('#one');
one.addEventListener('click', () => {
    content = content + '1'
    displayContent.textContent = content
});

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    content = content + '0'
    displayContent.textContent = content
});




