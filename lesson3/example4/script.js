'use strict';
const products = [
    { 
        id: 3, 
        price: 200, 
    }, 
    { 
        id: 4,
        price: 900, 
    }, 
    { 
        id: 1,
        price: 1000,
    },
];

function reducePrice(element) {
    element.price *= 0.85;    
}

products.forEach(reducePrice);
console.log(products);