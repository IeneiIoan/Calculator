// operations functions

let functionAdd = (a, b) => { return a + b;}

let functionSub = (a, b) => { return a - b;}

let functionMultiply = (a, b) => { return a * b;}

let functionDivide = (a, b) => { return a / b;}

let operate = (a, b, op) => {
    if (op == " + "){
        return functionAdd(a,b);
    } else if (op == " - "){
        return functionSub(a, b);
    } else if (op == " x "){
        return functionMultiply(a, b);
    } else if (op == " ÷ "){
        return functionDivide(a, b);
    }
}

// variables and display

let totalCalc = [];
let firstCalc = '';
const displayCalc = document.querySelector('.container1'); // mainScreen
const displayResult = document.querySelector('.container2'); // topScreen

// buttons

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".zero");

let add = document.querySelector(".add");
let sub = document.querySelector(".subtract");
let multiply = document.querySelector(".multiply");
let divide = document.querySelector(".divide");

let coma = document.querySelector(".coma");
let clear = document.querySelector(".clear");

let equal = document.querySelector(".equal");

// numbers events

one.addEventListener("click", (e) => {
    firstCalc = firstCalc.concat('1');
    displayCalc.innerHTML = firstCalc;

    // for validation
    console.log('you click number 1');
    console.log(firstCalc);

    return firstCalc;
});

two.addEventListener("click", (e) => {
    firstCalc = firstCalc.concat('2');
    displayCalc.innerHTML = firstCalc;

    // for validation
    console.log('you click number 2');
    console.log(firstCalc);

    return firstCalc;
});

three.addEventListener("click", (e) => {
    firstCalc = firstCalc.concat('3');
    displayCalc.innerHTML = firstCalc;

    // for validation
    console.log('you click number 3');
    console.log(firstCalc);

    return firstCalc;
});

four.addEventListener("click", (e) => {
    firstCalc = firstCalc.concat('4');
    displayCalc.innerHTML = firstCalc;

    // for validation
    console.log('you click number 4');
    console.log(firstCalc);

    return firstCalc;
});

five.addEventListener("click", (e) => {
    firstCalc = firstCalc.concat('5');
    displayCalc.innerHTML = firstCalc;

    // for validation
    console.log('you click number 5');
    console.log(firstCalc);

    return firstCalc;
});

six.addEventListener("click", (e) => {
    firstCalc = firstCalc.concat('6');
    displayCalc.innerHTML = firstCalc;

    // for validation
    console.log('you click number 6');
    console.log(firstCalc);

    return firstCalc;
});

seven.addEventListener("click", (e) => {
    firstCalc = firstCalc.concat('7');
    displayCalc.innerHTML = firstCalc;

    // for validation
    console.log('you click number 7');
    console.log(firstCalc);

    return firstCalc;
});

eight.addEventListener("click", (e) => {
    firstCalc = firstCalc.concat('8');
    displayCalc.innerHTML = firstCalc;

    // for validation
    console.log('you click number 8');
    console.log(firstCalc);

    return firstCalc;
});

nine.addEventListener("click", (e) => {
    firstCalc = firstCalc.concat('9');
    displayCalc.innerHTML = firstCalc;

    // for validation
    console.log('you click number 9');
    console.log(firstCalc);

    return firstCalc;
});

zero.addEventListener("click", (e) => {
    firstCalc = firstCalc.concat('0');
    displayCalc.innerHTML = firstCalc;

    // for validation
    console.log('you click number 0');
    console.log(firstCalc);

    return firstCalc;
});

coma.addEventListener('click', (e) => {
    if ((firstCalc.includes("."))) {
        alert("you cannot place two decimal points in the same number");
        
        return;
    }
    
    firstCalc = firstCalc + '.';
    displayCalc.innerHTML = firstCalc;

    // for validation
    console.log('you clicked the coma');
    console.log(firstCalc);

    return firstCalc;
}); 

// operators functions

add.addEventListener("click", (e) => {
    if (firstCalc == ''){
        alert("You need to add a number before the next operator");
        
        return;
    }

    // returns the first number in a string
    let firstCalcNum = parseFloat(firstCalc);
    totalCalc.push(firstCalcNum, " + ");
    firstCalc = '';
    displayResult.innerHTML = totalCalc.join('');
    firstCalc = '';
    displayResult.innerHTML = '';
    console.log(totalCalc);

});

sub.addEventListener("click", () => {
    if (firstCalc == ''){
        alert("You need to add a number before the next operator");
        
        return;
    }

    // returns the first number in a string
    let firstCalcNum = parseFloat(firstCalc);
    totalCalc.push(firstCalcNum, " - ");
    firstCalc = '';
    displayResult.innerHTML = totalCalc.join('');
    firstCalc = '';
    displayResult.innerHTML = '';
    console.log(totalCalc);
});

multiply.addEventListener("click", () => {
    if (firstCalc == ''){
        alert("You need to add a number before the next operator");
        
        return;
    }

    // returns the first number in a string
    let firstCalcNum = parseFloat(firstCalc);
    totalCalc.push(firstCalcNum, " x ");
    firstCalc = '';
    displayResult.innerHTML = totalCalc.join('');
    firstCalc = '';
    displayResult.innerHTML = '';
    console.log(totalCalc);
});

divide.addEventListener("click", () => {
    if (firstCalc == ''){
        alert("You need to add a number before the next operator");
        
        return;
    }

    // returns the first number in a string
    let firstCalcNum = parseFloat(firstCalc);
    totalCalc.push(firstCalcNum, " / ");
    firstCalc = '';
    displayResult.innerHTML = totalCalc.join('');
    firstCalc = '';
    displayResult.innerHTML = '';
    console.log(totalCalc);
});

clear.addEventListener("click", (e) =>{
    totalCalc = [];
    firstCalc = '';
    displayResult.innerHTML = totalCalc.join('');
    displayCalc.innerHTML = '';
});

equal.addEventListener("click", (e) => {
    if (totalCalc.length == 1){
        return totalCalc; 

    } else if ((totalCalc.slice(-1) == " x " || totalCalc.slice(-1) == " ÷ "  || totalCalc.slice(-1) == " + " || totalCalc.slice(-1) == " - " || totalCalc.slice(-1) == " % ") && (firstCalc == '')) {
        alert("you need to add a number after the operator");
        return;
    } else if (firstCalc !== Number){
        let firstCalcNum = parseFloat(firstCalc)
        totalCalc.push(firstCalcNum);
        firstCalc = '';
        displayResult.innerHTML = totalCalc.join('');
        displayCalc.innerHTML = firstCalc;  
    }

    let solutionNum;

    while (totalCalc.length > 1){
        while (totalCalc.includes(" + ")){
            let opIndex = totalCalc.indexOf(" + ");     // assigns the value of the index that was found with the value "+" in the string
            let operator = totalCalc[opIndex];
            let a = totalCalc[opIndex - 1];
            let b = totalCalc[opIndex + 1];
            console.log(a);
            console.log(b);
            solutionNum = operate(a,b,operator);
            console.log(solutionNum);
            totalCalc.splice(opIndex - 1, 3, solutionNum);      // remove the values ​​from position opIndex-1 to 3 and add the solutionNum value
            console.log(totalCalc);
        }

        while (totalCalc.includes(" - ")){
            let opIndex = totalCalc.indexOf(" - ");
            let operator = totalCalc[opIndex];
            let a = totalCalc[opIndex - 1];
            let b = totalCalc[opIndex + 1];
            console.log(a);
            console.log(b);
            solutionNum = operate(a,b,operator);
            console.log(solutionNum);
            totalCalc.splice(opIndex - 1, 3, solutionNum);
            console.log(totalCalc);
        }

        while (totalCalc.includes(" x ")){
            let opIndex = totalCalc.indexOf(" x ");
            let operator = totalCalc[opIndex];
            let a = totalCalc[opIndex - 1];
            let b = totalCalc[opIndex + 1];
            console.log(a);
            console.log(b);
            solutionNum = operate(a,b,operator);
            console.log(solutionNum);
            totalCalc.splice(opIndex - 1, 3, solutionNum);
            console.log(totalCalc);
        }

        while (totalCalc.includes(" / ")){
            let opIndex = totalCalc.indexOf(" / ");
            let operator = totalCalc[opIndex];
            let a = totalCalc[opIndex - 1];
            let b = totalCalc[opIndex + 1];
            console.log(a);
            console.log(b);
            solutionNum = operate(a,b,operator);
            console.log(solutionNum);
            totalCalc.splice(opIndex - 1, 3, solutionNum);
            console.log(totalCalc);
        }

        solutionNum = Math.round((solutionNum + Number.EPSILON) * 100) / 100;
        firstCalc = solutionNum;
        totalCalc = [];
        displayResult.innerHTML = '';
        displayCalc.innerHTML = firstCalc;
        
        return solutionNum;
    }

});