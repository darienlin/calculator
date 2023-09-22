const indexArray = [];
const signArray = [];
var nextInt = true;
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
    nextInt = true;
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    content = content + '9'
    displayContent.textContent = content

    if(nextInt)
    indexArray.push(content.length-1)

    nextInt = false;
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    content = content + '8'
    displayContent.textContent = content

    if(nextInt)
    indexArray.push(content.length-1)

    nextInt = false;
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    content = content + '7'
    displayContent.textContent = content

    if(nextInt)
    indexArray.push(content.length-1)

    nextInt = false;
});

const six = document.querySelector('#six');
six.addEventListener('click', () => {
    content = content + '6'
    displayContent.textContent = content

    if(nextInt)
    indexArray.push(content.length-1)

    nextInt = false;
});

const five = document.querySelector('#five');
five.addEventListener('click', () => {
    content = content + '5'
    displayContent.textContent = content

    if(nextInt)
    indexArray.push(content.length-1)

    nextInt = false;
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
    content = content + '4'
    displayContent.textContent = content

    if(nextInt)
    indexArray.push(content.length-1)

    nextInt = false;
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    content = content + '3'
    displayContent.textContent = content

    if(nextInt)
    indexArray.push(content.length-1)

    nextInt = false;
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    content = content + '2'
    displayContent.textContent = content

    if(nextInt)
    indexArray.push(content.length-1)

    nextInt = false;
});

const one = document.querySelector('#one');
one.addEventListener('click', () => {
    content = content + '1'
    displayContent.textContent = content

    if(nextInt)
    indexArray.push(content.length-1)

    nextInt = false;
});

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    content = content + '0'
    displayContent.textContent = content

    if(nextInt)
    indexArray.push(indexArray.length-1)

    nextInt = false;
});

const dot = document.querySelector('#dot');
dot.addEventListener('click', () => {
    content = content + '.'
    displayContent.textContent = content

    if(nextInt)
    indexArray.push(content.length-1)

    nextInt = false;
});

const add = document.querySelector('#add');
add.addEventListener('click', () => {
    content = content + '+'
    displayContent.textContent = content

    if(!nextInt)
    signArray.push(content.length-1)

    nextInt = true;
});

const sub = document.querySelector('#sub');
sub.addEventListener('click', () => {
    content = content + '‒'
    displayContent.textContent = content

    if(!nextInt)
    signArray.push(content.length-1)

    nextInt = true;
});

const times = document.querySelector('#times');
times.addEventListener('click', () => {
    content = content + '×';
    displayContent.textContent = content

    if(!nextInt)
    signArray.push(content.length-1)

    nextInt = true;
});

const div = document.querySelector('#div');
div.addEventListener('click', () => {
    content = content + '÷'
    displayContent.textContent = content

    if(!nextInt)
    signArray.push(content.length-1)

    nextInt = true;
});

const neg = document.querySelector('#neg');
neg.addEventListener('click', () => {
    content = content + '-'
    displayContent.textContent = content

    if(!nextInt)
    signArray.push(content.length-1)

    nextInt = false;
});


const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    /**indexArray.forEach(index =>{
        console.log(`index Array ${index}`)
    })

    signArray.forEach(index =>{
        console.log(`sign Array ${index}`)
    })**/

   while(content.indexOf('×') > 0 || content.indexOf('÷') > 0){
    let num1 = 0
    let num2 = 0
    let equation = ''
    let answer = 0;
    let mult = content.indexOf('×')
    let div = content.indexOf('÷')
    let firstSign = ''

    if(mult == - 1)
    firstSign = div;

    else if(div == -1)
    firstSign = mult;

    else if(mult > div)
    firstSign = div;

    else
    firstSign = mult;
            for(let x = firstSign-1;x >= 0; x--){
                num1 = content.slice(x, firstSign)
                //console.log(`x: ${x}  mult: ${mult}`)
                if(content.slice(x,x+1) == '+')
                break;

                if(content.slice(x,x+1) == '‒')
                break;

                if(content.slice(x,x+1) == '×')
                break;

                if(content.slice(x,x+1) == '÷')
                break;
            }

            for(let x = firstSign+1; x <= content.length; x++){
                num2 = content.slice(firstSign+1, x)
                //console.log(`num 2 x: ${mult+1}  mult: ${x}`)
                if(content.slice(x,x+1) == '+')
                break;

                if(content.slice(x,x+1) == '‒')
                break;

                if(content.slice(x,x+1) == '×')
                break;

                if(content.slice(x,x+1) == '÷')
                break;
            }

            if(content.slice(firstSign, firstSign+1) == '×'){
            equation = num1 + '×' + num2
            answer = parseFloat(num1) * parseFloat(num2);
            console.log(`og equation:${content}`)
            content = content.replace(equation,answer)
            console.log(`multiply equation:${equation}\n num1:${num1}\n num2:${num2}\n answer:${answer}\n content:${content}`)
            }

            else if(content.slice(firstSign, firstSign+1) == '÷'){
                equation = num1 + '÷' + num2
                answer = parseFloat(num1) / parseFloat(num2);
                console.log(`og equation:${content}`)
                content = content.replace(equation,answer)
                console.log(`divide equation:${equation}\n num1:${num1}\n num2:${num2}\n answer:${answer}\n content:${content}`)
                }
    };



    displayContent.textContent = content

});



