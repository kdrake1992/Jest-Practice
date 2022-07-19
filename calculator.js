function add(a,b) {
    if(numberCheck(a) && numberCheck(b)) {
        return a + b;
    }
    else {
        return 'Error'
    }
}
function subtract(a,b) {
    if(numberCheck(a) && numberCheck(b)) {
        return a - b;
    }
    else {
        return 'Error'
    }

}
function multiply(a,b) {
    if(numberCheck(a) && numberCheck(b)) {
        return a * b;
    }
    else {
        return 'Error'
    }

}
function divide(a,b) {
    if(numberCheck(a) && numberCheck(b)) {
        return a / b;
    }
    else {
        return 'Error'
    }

}
function numberCheck(num) {
    return typeof num == 'number'
}

module.exports.add = add;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.divide = divide;