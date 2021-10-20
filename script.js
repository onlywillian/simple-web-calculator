const resultContent = document.querySelector(".result");
var operator = "";
var finalValue = 0;
var xValue = "";
var yValue = "";

function soma(x , y) {
    x ? x : 0;
    y ? y : 0;

    console.log(x + y)
    return x + y;
};

function subtracao(x , y) {
    x ? x : 0;
    y ? y : 0;
    
    console.log(x - y)
    return x - y;
};

function multiplicacao(x , y) {
    x ? x : 0;
    y ? y : 0;

    console.log(x * y)
    return x * y;
};

function divisao(x, y) {
    x ? x : 0;
    y ? y : 0;

    console.log(x / y)
    return x / y;
};

function funcChose(x, y) {
    switch (operator) {
        case "+":
            return soma(x, y);
            break;
        case "-":
            return subtracao(x, y);
            break;
        case "*":
            return multiplicacao(x, y);
            break;
        case "/":
            return divisao(x, y);
            break;
        default: 
            console.log("Nada foi passado");
    }
}

function numberAdd(num) {
    if (operator !== "") {
        yValue += num;
        console.log(yValue);
        return 
    }
    
    xValue += num;
    console.log(xValue);
}

function equals() {

    resultContent.textContent = funcChose(Number(xValue), Number(yValue));

    xValue = "";
    yValue = "";
    operator = "";
}

function operatorUpdate(op) {
    operator = op;

    console.log(operator);
}