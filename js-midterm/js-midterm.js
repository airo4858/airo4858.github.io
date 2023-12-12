
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

const btn0 = document.querySelector('#b0').addEventListener('click', number0);
const btn1 = document.querySelector('#b1').addEventListener('click', number1);
const btn2 = document.querySelector('#b2').addEventListener('click', number2);
const btn3 = document.querySelector('#b3').addEventListener('click', number3);
const btn4 = document.querySelector('#b4').addEventListener('click', number4);
const btn5 = document.querySelector('#b5').addEventListener('click', number5);
const btn6 = document.querySelector('#b6').addEventListener('click', number6);
const btn7 = document.querySelector('#b7').addEventListener('click', number7);
const btn8 = document.querySelector('#b8').addEventListener('click', number8);
const btn9 = document.querySelector('#b9').addEventListener('click', number9);
const reset = document.querySelector('#ob2').addEventListener('click',resetNumber);
const submit = document.querySelector('#ob1').addEventListener('click', submitNumber);

const newtext = document.querySelector('#phone-number');

function number0() {
    const n1 = 0;
    let currentNumber = newtext.textContent;
    let finalNum = n1 + currentNumber;
    newtext.textContent = finalNum;
}

function number1() {
    const n1 = 9;
    let currentNumber = newtext.textContent;
    let finalNum = n1 + currentNumber;
    newtext.textContent = finalNum;
}

function number2() {
    const n1 = 2;
    let currentNumber = newtext.textContent;
    let finalNum = n1 + currentNumber;
    newtext.textContent = finalNum;
}

function number3() {
    const n1 = 4;
    let currentNumber = newtext.textContent;
    if (currentNumber.length >= 5){
        const n1 = 3;
        let finalNum = n1 + currentNumber;
        newtext.textContent = finalNum;
    }
    else {
        let finalNum = n1 + currentNumber;
        newtext.textContent = finalNum;
    }
}

function number4() {
    const n1 = 3;
    let currentNumber = newtext.textContent;
    if (currentNumber.length >= 5){
        const n1 = 4;
        let finalNum = n1 + currentNumber;
        newtext.textContent = finalNum;
    }
    else {
        let finalNum = n1 + currentNumber;
        newtext.textContent = finalNum;
    }
}

function number5() {
    const n1 = 5;
    let currentNumber = newtext.textContent;
    if (currentNumber.length >= 5){
        const n1 = 6;
        let finalNum = n1 + currentNumber;
        newtext.textContent = finalNum;
    }
    else {
        let finalNum = n1 + currentNumber;
        newtext.textContent = finalNum;
    }
}

function number6() {
    const n1 = 6;
    let currentNumber = newtext.textContent;
    if (currentNumber.length >= 5){
        const n1 = 5;
        let finalNum = n1 + currentNumber;
        newtext.textContent = finalNum;
    }
    else {
        let finalNum = n1 + currentNumber;
        newtext.textContent = finalNum;
    }
}

function number7() {
    const n1 = 7;
    let currentNumber = newtext.textContent;
    let finalNum = n1 + currentNumber;
    newtext.textContent = finalNum;
}

function number8() {
    const n1 = 8;
    let currentNumber = newtext.textContent;
    let finalNum = n1 + currentNumber;
    newtext.textContent = finalNum;
}

function number9() {
    const n1 = 1;
    let currentNumber = newtext.textContent;
    let finalNum = n1 + currentNumber;
    newtext.textContent = finalNum;
}

function resetNumber() {
    let finalNum = "";
    newtext.textContent = finalNum;
}

function submitNumber() {
    let currentNumber = newtext.textContent;
    if (currentNumber == 0){
        alert("Put in a number, STOOPID!");
    }
    else if (currentNumber.length > 10){
        alert("too... many... number...");
        resetNumber();
    }
    else if (currentNumber.length <= 9){
        alert("your stupidty amazes me. You should be studied in a labratory.");
        resetNumber();
    }
    else if (currentNumber.length == 10){
        alert("WOWIE! BY GOLLY! YIPPIE! PHONE NUMEBR RECEIVED");
        resetNumber();
    }
}