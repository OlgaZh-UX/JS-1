'use strict';
let a = -10;
let b = -13;
if (a >= 0  && b >= 0) {
    alert("Разница чисел = " + Math.abs(a - b));
} else if (a < 0 && b < 0) {
    alert("Произведение чисел = " + (a * b));
} else if (Math.sign(a) != Math.sign(b)) {
    alert("Сумма чисел = " + (a + b));
}