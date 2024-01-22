//Functions to manage calculator operations
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
let firstNum = 0;
let secondNum = 0;
let operator = "";

//preliminary function to operate calculator
function operate(operator) {
    if (operator == "+") {
        add(firstNum, secondNum);
    } else if (operator == "-") {
        return subtract(firstNum, secondNum);
    } else if (operator == "*") {
        return multiply(firstNum, secondNum);
    } else {
        if (operator == "/" && secondNum == 0) {
            return "You're crashing the universe!";
        } else {
        return divide(firstNum, secondNum);
        }
    }
}

let firstSlot = true;
let displayFirst= "";
let displaySecond = "";
const FIRSTSET = document.getElementById("first");
const OPDISPLAY = document.getElementById("displayop");
const SECONDSET = document.getElementById("second");

//code for setting listeners to number buttons
const NUMBERBUTTON = document.querySelectorAll(`#numbers button`);
NUMBERBUTTON.forEach(item => item.addEventListener(`click`, function() {
    if (firstSlot === true) {
        displayFirst += this.textContent;
        showfirst();
    } else {
        displaySecond += this.textContent;
        showsecond();
    }
}))
//code for displaying input
function showfirst() {
    FIRSTSET.textContent = displayFirst; 
};
function showsecond() {
    SECONDSET.textContent = displaySecond; 
};
function showop() {
    OPDISPLAY.textContent = operator; 
}

//code for handling operator
const PRESSOP = document.querySelectorAll(`#operators button`);
PRESSOP.forEach(item => item.addEventListener(`click`, function() {
    operator = this.textContent;
    firstSlot = false;
    showop();
}))

//code for clear button
function clearall() {
    firstSlot = true;   
    displayFirst = "";
    displaySecond = "";
    operator = "";
    FIRSTSET.textContent = "";
    SECONDSET.textContent = "";
    OPDISPLAY.textContent = "";
}
const CLEAR = document.querySelector("#buttonclear");
CLEAR.addEventListener(`click`, clearall);