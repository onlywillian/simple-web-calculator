const resultContent = document.querySelector(".result").querySelector('p');
const mini = document.querySelector('.mini');
var operator = "";
var finalValue = 0;
var xValue = "";
var yValue = "";

function soma(x , y) {
    x ? x : 0;
    y ? y : 0;

    return x + y;
};

function subtracao(x , y) {
    x ? x : 0;
    y ? y : 0;
    
    return x - y;
};

function multiplicacao(x , y) {
    x ? x : 0;
    y ? y : 0;

    return x * y;
};

function divisao(x, y) {
    x ? x : 0;
    y ? y : 0;

    return x / y;
};

function rest(x, y) {
    x ? x : 0;
    y ? y : 0;

    return x % y;
}

function funcChose(x, y) {
    switch (operator) {
        case "+":
            return soma(x, y);
        case "-":
            return subtracao(x, y);
        case "*":
            return multiplicacao(x, y);
        case "/":
            return divisao(x, y);
        case "%":
            return rest(x, y);
        default: 
            return 0
    }
}

function numberAdd(num) {
    if (operator !== "") {
        yValue += num;
        resultContent.textContent = yValue;
        return 
    }
    
    xValue += num;
    resultContent.textContent = xValue;
}

function equals() {
    finalValue = funcChose(Number(xValue), Number(yValue));
    resultContent.textContent = finalValue;

    mini.textContent = xValue + " " + operator + " " + yValue;
    xValue = "";
    yValue = "";
    operator = "";
}

function operatorUpdate(op) {
    operator = op;
    resultContent.textContent += ` ${op} `;

    mini.textContent = xValue + " " + operator;
    resultContent.textContent = 0;
}

function clearAll() {
    resultContent.textContent = 0;
    mini.textContent = 0;
    xValue = "";
    yValue = "";
    operator = "";
}

function switchSignal() {
    if (operator !== "") {
        Number(yValue);
        yValue = yValue * (-1);
        
        String(xValue);
        return resultContent.textContent = yValue;
    }

    Number(xValue);
    xValue = xValue * (-1);

    String(xValue);
    return resultContent.textContent = xValue;
}