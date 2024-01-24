let total = 0;
add = (a, b) => {
    let one = parseFloat(a);
    let two = parseFloat(b);
    total = Math.round((two + one) * 100) / 100;
}
subtract = (a, b) => {
    total = Math.round((b - a) * 100) / 100;
}
multiply= (a, b) => {
    total = Math.round((b * a) * 100) / 100;
}
divide = (a, b) => {
    total = Math.round((b / a) * 100) / 100;
}


let firstNum = "";
let secondNum = "";
let operator = "";

function operate() {
    if (operator == "" || secondNum == "" || firstNum == "") {
        return;
    } else if (operator == "+") {
        add(firstNum, secondNum);
        DISPLAY.textContent = total;
    } else if (operator == "-") {
        subtract(firstNum, secondNum);
        DISPLAY.textContent = total;
    } else if (operator == "*") {
        multiply(firstNum, secondNum);
        DISPLAY.textContent = total;
    } else if (operator == "/" && firstNum == 0) {
        DISPLAY.textContent = "you've crashed the universe!"
        firstNum = "", total = "", secondNum = "";
    } else {
        divide(firstNum, secondNum);
        DISPLAY.textContent = total;
    }  
    secondNum = total;
    firstNum = "";
}

const DISPLAY = document.querySelector(`#display`);

const OPERATOR = document.querySelectorAll(`#operators button`);
OPERATOR.forEach(item => item.addEventListener(`click`, function() {
    if (secondNum == "") {
        operator = this.textContent;
        secondNum = firstNum;
        firstNum = "";
        return;
    }
    operate();
    operator = this.textContent;
     
    

}));

const NUMBERS = document.querySelectorAll(`#numbers button`)
NUMBERS.forEach(item => item.addEventListener(`click`, function() {    
    firstNum += this.textContent;
    DISPLAY.textContent = firstNum;
}));

const RESULT = document.querySelector(`#equal`);
RESULT.addEventListener(`click`, operate);

const CLEAR = document.querySelector(`#buttonclear`);
CLEAR.addEventListener(`click`, function() {
    firstNum = "", secondNum = "", operator = "", total = 0;
    DISPLAY.textContent = "";   
})