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

    if (nextInt)
        indexArray.push(content.length - 1)

    nextInt = false;
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    content = content + '8'
    displayContent.textContent = content

    if (nextInt)
        indexArray.push(content.length - 1)

    nextInt = false;
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    content = content + '7'
    displayContent.textContent = content

    if (nextInt)
        indexArray.push(content.length - 1)

    nextInt = false;
});

const six = document.querySelector('#six');
six.addEventListener('click', () => {
    content = content + '6'
    displayContent.textContent = content

    if (nextInt)
        indexArray.push(content.length - 1)

    nextInt = false;
});

const five = document.querySelector('#five');
five.addEventListener('click', () => {
    content = content + '5'
    displayContent.textContent = content

    if (nextInt)
        indexArray.push(content.length - 1)

    nextInt = false;
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
    content = content + '4'
    displayContent.textContent = content

    if (nextInt)
        indexArray.push(content.length - 1)

    nextInt = false;
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    content = content + '3'
    displayContent.textContent = content

    if (nextInt)
        indexArray.push(content.length - 1)

    nextInt = false;
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    content = content + '2'
    displayContent.textContent = content

    if (nextInt)
        indexArray.push(content.length - 1)

    nextInt = false;
});

const one = document.querySelector('#one');
one.addEventListener('click', () => {
    content = content + '1'
    displayContent.textContent = content

    if (nextInt)
        indexArray.push(content.length - 1)

    nextInt = false;
});

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    content = content + '0'
    displayContent.textContent = content

    if (nextInt)
        indexArray.push(indexArray.length - 1)

    nextInt = false;
});

const dot = document.querySelector('#dot');
dot.addEventListener('click', () => {
    content = content + '.'
    displayContent.textContent = content

    if (nextInt)
        indexArray.push(content.length - 1)

    nextInt = false;
});

const add = document.querySelector('#add');
add.addEventListener('click', () => {
    content = content + '+'
    displayContent.textContent = content

    if (!nextInt)
        signArray.push(content.length - 1)

    nextInt = true;
});

const sub = document.querySelector('#sub');
sub.addEventListener('click', () => {
    content = content + '‒'
    displayContent.textContent = content

    if (!nextInt)
        signArray.push(content.length - 1)

    nextInt = true;
});

const times = document.querySelector('#times');
times.addEventListener('click', () => {
    content = content + '×';
    displayContent.textContent = content

    if (!nextInt)
        signArray.push(content.length - 1)

    nextInt = true;
});

const div = document.querySelector('#div');
div.addEventListener('click', () => {
    content = content + '÷'
    displayContent.textContent = content

    if (!nextInt)
        signArray.push(content.length - 1)

    nextInt = true;
});

const neg = document.querySelector('#neg');
neg.addEventListener('click', () => {
    content = content + '-'
    displayContent.textContent = content

    if (!nextInt)
        signArray.push(content.length - 1)

    nextInt = false;
});

const percent = document.querySelector('#percent');
percent.addEventListener('click', () => {
    let firstSign = content.length - 1;
    if (content.slice(firstSign, firstSign+1) == '+' || content.slice(firstSign, firstSign+1) == '‒' || content.slice(firstSign, firstSign+1) == '×' || content.slice(firstSign, firstSign+1) == '÷'){
        displayContent.textContent = 'SYNTAX ERROR'
        content = ''
        error = false;
    }

    else{
        multDiv();
        addSub();
    var contentNum = parseFloat(content);
    if (content.length > 16)
        content = contentNum.toExponential(5)

        else{
            content = content/100
            displayContent.textContent = content
        }
    }
});


var error = false;

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    multDiv();
    addSub();

    if(error){
        displayContent.textContent = 'SYNTAX ERROR'
        content = ''
        error = false;
    }

    else{
    var contentNum = parseFloat(content);
    if (content.length > 16)
        content = contentNum.toExponential(5)

    displayContent.textContent = content
    }

});


function multDiv() {
    while (content.indexOf('×') >= 0 || content.indexOf('÷') >= 0) {
        let num1 = 0
        let num2 = 0
        let equation = ''
        let answer = 0;
        let mult = content.indexOf('×')
        let div = content.indexOf('÷')
        let firstSign = 0

        if (mult == - 1)
            firstSign = div;

        else if (div == -1)
            firstSign = mult;

        else if (mult > div)
            firstSign = div;

        else
            firstSign = mult;

            
            if (firstSign == 0 || content.slice(firstSign-1, firstSign) == '+' || content.slice(firstSign-1, firstSign) == '‒' || content.slice(firstSign-1, firstSign) == '×' || content.slice(firstSign-1, firstSign) == '÷' || content.slice(firstSign+1, firstSign+2) == '+' || content.slice(firstSign+1, firstSign+2) == '‒' || content.slice(firstSign+1, firstSign+2) == '×' || content.slice(firstSign+1, firstSign+2) == '÷'){
                error = true;
                console.log('error')
                break;
            }


        //searches for first num
        for (let x = firstSign - 1; x >= 0; x--) {
            if (content.slice(x, x + 1) == '+' || content.slice(x, x + 1) == '‒' || content.slice(x, x + 1) == '×' || content.slice(x, x + 1) == '÷')
                break;

            num1 = content.slice(x, firstSign)
        }//end of first for loop 

        if(error)
        break;

        //searches for second num
        for (let x = firstSign + 1; x <= content.length; x++) {
            if (content.slice(x, x + 1) == '+' || content.slice(x, x + 1) == '‒' || content.slice(x, x + 1) == '×' || content.slice(x, x + 1) == '÷')
                break;
            num2 = content.slice(firstSign + 1, x + 1)
        }//end of second for loop

        if (content.slice(firstSign, firstSign + 1) == '×') {
            equation = num1 + '×' + num2
            answer = parseFloat(num1) * parseFloat(num2);
        }

        else if (content.slice(firstSign, firstSign + 1) == '÷') {
            equation = num1 + '÷' + num2
            answer = parseFloat(num1) / parseFloat(num2);
        }
        content = content.replace(equation, answer)
    };//end of while loop
}//end of multdiv function

function addSub() {
    content = content.replace('--', '+');
    while (content.indexOf('+') > 0 || content.indexOf('‒') > 0) {
        let num1 = 0
        let num2 = 0
        let equation = ''
        let answer = 0;
        let add = content.indexOf('+')
        let sub = content.indexOf('‒')
        let firstSign = ''

        if (add == - 1)
            firstSign = sub;

        else if (sub == -1)
            firstSign = add;

        else if (add > sub)
            firstSign = sub;

        else
            firstSign = add;

            
            if (firstSign== 0 || content.slice(firstSign-1, firstSign) == '+' || content.slice(firstSign-1, firstSign) == '‒' || content.slice(firstSign-1, firstSign) == '×' || content.slice(firstSign-1, firstSign) == '÷' || content.slice(firstSign+1, firstSign+2) == '+' || content.slice(firstSign+1, firstSign+2) == '‒' || content.slice(firstSign+1, firstSign+2) == '×' || content.slice(firstSign+1, firstSign+2) == '÷'){
                error = true;
                console.log('error')
                break;
            }

        for (let x = firstSign - 1; x >= 0; x--) {
            if (content.slice(x, x + 1) == '+' || content.slice(x, x + 1) == '‒' || content.slice(x, x + 1) == '×' || content.slice(x, x + 1) == '÷')
                break;

            num1 = content.slice(x, firstSign)
        }

        for (let x = firstSign + 1; x <= content.length; x++) {
            if (content.slice(x, x + 1) == '+' || content.slice(x, x + 1) == '‒' || content.slice(x, x + 1) == '×' || content.slice(x, x + 1) == '÷')
                break;
            num2 = content.slice(firstSign + 1, x + 1)
        }

        if (content.slice(firstSign, firstSign + 1) == '+') {
            equation = num1 + '+' + num2
            answer = parseFloat(num1) + parseFloat(num2);
        }

        else if (content.slice(firstSign, firstSign + 1) == '‒') {
            equation = num1 + '‒' + num2
            answer = parseFloat(num1) - parseFloat(num2);
        }
        content = content.replace(equation, answer)
    };

}//end of addsub function
