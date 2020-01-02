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

const element = ;

function reducePrice(element, index, array) {
    element[index].price *= 0.85;
    console.log(element[index]);
}

products.forEach(reducePrice);