let total = 0;
//Functions to manage calculator operations
function add(a, b) {
    let one = parseInt(a);
    let two = parseInt(b);
    total = Math.round((one + two) * 100) / 100;
    
    SHOWEQUAL.textContent = total;
}
function subtract(a, b) {
    total = Math.round((a - b) * 100) / 100;
    SHOWEQUAL.textContent = total;
}
function multiply(a, b) {
    total = Math.round((a * b) * 100) / 100
    SHOWEQUAL.textContent = total;
}
function divide(a, b) {
    total = Math.round((a / b) * 100) / 100
    SHOWEQUAL.textContent = total;
}
let operator = "";
const SHOWEQUAL = document.querySelector("#endresult");
const EQUAL = document.querySelector("#buttonequal");

//preliminary function to operate calculator
function operate() {
    if (operator == "" || displaySecond == "") {
        SHOWEQUAL.textContent = "What are we calculating?"
    } else if (operator == "+") {
       add(displayFirst, displaySecond);
    } else if (operator == "-") {
        subtract(displayFirst, displaySecond);
    } else if (operator == "*") {
        multiply(displayFirst, displaySecond);
    } else if (operator == "/" && displaySecond == 0) {
        SHOWEQUAL.textContent = "You're crashing the universe!";
    } else {
        divide(displayFirst, displaySecond);
    }
    displayFirst = total;
}   

let firstSlot = true;
let secondSlot = false;
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
    } else if (secondSlot === true) {
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
    secondSlot = true;
    displaySecond = "";
    SECONDSET.textContent = "";
    if (SHOWEQUAL.textContent != "") {
        displayFirst = total;
        FIRSTSET.textContent = total;
    }
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
    SHOWEQUAL.textContent = "";
}
const CLEAR = document.querySelector("#buttonclear");
CLEAR.addEventListener(`click`, clearall);

//code for calc button


EQUAL.addEventListener(`click`, operate);