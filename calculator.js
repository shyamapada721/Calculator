let equation = "";
let result = 0;
let operator = "";
let num1 = 0;
let num2 = 0;
let isResultShowing = false;
let history = [];

function addToEquation(num) {
    if(equation == "0") {
        equation = "";
    }
    if(isResultShowing && num != "+" && num != "-" && num != "*" && num != "/" && num != "%") {
        equation = "";
        isResultShowing = false;
    }else if(isResultShowing) {
        isResultShowing = false;
    }
        
    equation = equation + num;
    document.getElementById("equation").innerHTML = equation;
}

function clearEquation() {
    equation = "0";
    document.getElementById("equation").innerHTML = equation;
}

function backEquation() {
    equation = equation.slice(0, equation.length - 1);
    if(equation.length == 0) {
        equation = "0";
    }
    document.getElementById("equation").innerHTML = equation;
}

function calculate() {
    console.log(equation);
    if(equation.length == 0) {
        return;
    }
    if(equation.includes("+")) {
        operator = "+";
    } else if(equation.includes("-")) {
        operator = "-";
    } else if(equation.includes("*")) {
        operator = "*";
    } else if(equation.includes("/")) {
        operator = "/";
    } else if(equation.includes("%")) {
        operator = "%";
    } else {
        return;
    }
    num1 = parseInt(equation.split(operator)[0]);
    num2 = parseInt(equation.split(operator)[1]);
    if(operator == "+") {
        result = num1 + num2;
    } else if(operator == "-") {
        result = num1 - num2;
    } else if(operator == "*") {
        result = num1 * num2;
    } else if(operator == "/") {
        result = num1 / num2;
    } else if(operator == "%") {
        result = num1 % num2;
    }
    document.getElementById("equation").innerHTML = result;
    equation = result;
    history.push(equation);
    isResultShowing = true;
}

function showHistory() {
    if(history.length == 0) {
        return;
    }
    document.getElementById("equation").innerHTML = history;
}