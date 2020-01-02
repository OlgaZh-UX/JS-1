'use strict';

function GetCharacteristicNumb(n) {
    if (n == 0) {
        return console.log(`${n} - это ноль`);
    } else {
        switch (n % 2) {
            case 0 : return console.log(`${n} - это четное`);
            case 1 : return console.log(`${n} - это нечетное`);            
        }
    }
    
}

for (let i = 0; i <= 10; i++) {
    GetCharacteristicNumb(i);
}