//Basic Calculator Functions
function add(a,b){ return `${a+b}` };
function sub(a,b){ return `${a-b}` };
function mult(a,b){ return `${a*b}` };
function div(a,b){ return (b == 0 ? 'Nice Try' : `${(a/b).toFixed(3)}`);}

//Operate function that takes in string input from a form
function operate(expr) {
    //console.log(expr);
    let exprArr = expr.split(/[\+\-\*\/]/);
    let opIndex = expr.search(/[\+\-\*\/]/);
    //console.log(exprArr);
    //console.log(`${opIndex} : ${expr[opIndex]}`);

    switch(expr[opIndex]) {
        case '+':
          return add(+exprArr[0],+exprArr[1]);
        case '-':
            return sub(+exprArr[0],+exprArr[1]);
        case '*':
            return mult(+exprArr[0],+exprArr[1]);
        case '/':
            return div(+exprArr[0],+exprArr[1]);
        default:
            return '';
    }
}

//Load layout of Keyboard for Calculator
const keys = ["AC","DE",".","/","7","8","9","*","4","5","6","-","1","2","3","+","0","="];

//Dynamically place the keys
//Reference container
const form = document.querySelector("form");
const display = document.createElement("div");
display.classList.add("display");
const inputDisplay = document.createElement("input");
inputDisplay.type = "text";
inputDisplay.name = "display";
display.textContent = "Hello";
display.style.color = "white";





//Styling and qualities must be applied before appending
display.appendChild(inputDisplay);
form.appendChild(display);
form.appendChild(key);