'use strict';

class Digits {
    constructor(num) {
        if (typeof num != 'number') {
            console.log('Нужно указать число');
        } else if (num > 999 || num < 0) {
            console.log('Нужно указать число в диапазоне [0, 999]');
        } else if (!Number.isInteger(num)) {
            console.log('Нужно указать целое число');
        } else {
            this.units = num % 10;
            this.tens = Math.floor(num/10) % 10;
            this.hundreds = Math.floor(num/100) % 10;
        }
    }    
}

const num0 = new Digits(365);
const num1 = new Digits(4);
const num2 = new Digits(2.4);
const num3 = new Digits(1000);
const num4 = new Digits('-122');

console.log(num0);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);