'use strict';
function addition(a,b) {
    return a + b;
}
function subtraction(a,b) {
    return a - b;    
}
function division(a,b) {
    return a / b;
}
function multiplication(a,b) {
    return a * b;
}
/**
 * Функция производит одну из 4 операций (+,-,/,*) над передаваемыми аргументами
 * @param {number} arg1 Первый агрумент
 * @param {number} arg2 Второй аргумент 
 * @param {'addition'|'subtraction'|'division'|'multiplication'} operation название операции
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'addition': {
            return addition(arg1,arg2);             
        }
        case 'subtraction': {
            return subtraction(arg1,arg2);            
        }
        case 'division' : {
            return division(arg1,arg2);            
        }
        case 'multiplication': {
            return multiplication(arg1,arg2);            
        }
        default : {
            return 'unknown operation';
        }
    }
}

console.log(mathOperation(25,10,'addition'));
console.log(mathOperation(30,30,'subtraction'));
console.log(mathOperation(15,5,'division'));
console.log(mathOperation(14,5,'multiplication'));
console.log(mathOperation(123,11,'sum'));