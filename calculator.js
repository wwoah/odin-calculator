//Basic Calculator Functions
//Addition
function add(a,b){ return `${a+b}` };
//Subtraction
function sub(a,b){ return `${a-b}` };
//Multiplication
function mult(a,b){ return `${a*b}` };
//Divsion
function div(a,b){ return (b == 0 ? 'Cannot Divide By Zero' : `${a/b}`);}

//Operate function
function operate(expr) {
    //expression is received as a string
    //console.log(expr);
    let exprArr = expr.split(/([0-9]+)/);
    console.log(exprArr);

    //break the string into a 
    switch(exprArr[2]) {
        case '+':
          return add(+exprArr[1],+exprArr[3]);
        case '-':
            return sub(+exprArr[1],+exprArr[3]);
        case '*':
            return mult(+exprArr[1],+exprArr[3]);
        case '/':
            return div(+exprArr[1],+exprArr[3]);
        default:
            return '';
    }
}
