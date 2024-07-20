let displayElement = document.getElementById('display');
let currentExpression = '';
let result = 0;

function clearDisplay() {
    displayElement.textContent = '0';
    currentExpression = '';
    result = 0;
}

function appendCharacter(character) {
    if (displayElement.textContent === '0' && character !== '.') {
        displayElement.textContent = character;
        currentExpression = character;
    } else {
        displayElement.textContent += character;
        currentExpression += character;
    }
}

function calculateResult() {
    try {
        result = eval(currentExpression);
        displayElement.textContent = result;
        currentExpression += ' = ' + result;
    } catch (error) {
        displayElement.textContent = 'Error';
        currentExpression = '';
        result = 0;
    }
}

function performFunction(func) {
    try {
        let value = parseFloat(displayElement.textContent);
        switch (func) {
            case 'log':
                result = Math.log10(value);
                break;
            case '1/x':
                result = 1 / value;
                break;
            case 'sin':
                result = Math.sin(value * Math.PI / 180);
                break;
            case 'cos':
                result = Math.cos(value * Math.PI / 180);
                break;
            case 'tan':
                result = Math.tan(value * Math.PI / 180);
                break;
        }
        displayElement.textContent = result;
        currentExpression = func + '(' + value + ') = ' + result;
    } catch (error) {
        displayElement.textContent = 'Error';
        currentExpression = '';
        result = 0;
    }
}

function handlePower() {
    currentExpression += '**';
    displayElement.textContent += '^';
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const value = this.textContent;

        if (!isNaN(value) || value === '.') {
            appendCharacter(value);
        } else if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculateResult();
        } else if (['log', '1/x', 'sin', 'cos', 'tan'].includes(value)) {
            performFunction(value);
        } else if (value === 'x^y') {
            handlePower();
        } else {
            appendCharacter(' ' + value + ' ');
        }
    });
});
