//Basic Calculator Functions
//Addition
function add(a,b){ return `${a+b}` };
//Subtraction
function sub(a,b){ return `${a-b}` };
//Multiplication
function mult(a,b){ return `${a*b}` };
//Divsion
function div(a,b){ return (b == 0 ? 'Nice Try' : `${(a/b).toFixed(3)}`);}

//Operate function that takes in string input from a form
function operate(expr) {
    console.log(expr);
    let exprArr = expr.split(/[\+\-\*\/]/);
    let opIndex = expr.search(/[\+\-\*\/]/);
    console.log(exprArr);
    console.log(`${opIndex} : ${expr[opIndex]}`);


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




//Dynamically place the keys