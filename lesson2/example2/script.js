'use strict';
let a = 2; 
let x = 1 + (a *= 2); 
// a = a*2, то есть 4, затем 1 + 4 получается 5 и присваивается x
console.log(a); //4
console.log(x); //5