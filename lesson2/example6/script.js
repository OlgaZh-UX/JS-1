'use strict';
/**
 * Функия склоняет слово 'рублей' в зависимости от передаваемой суммы
 * @param {number} a 
 */
function roubleDeclension(a) {    
    let length = a.length;
    let lastTwoIndex =  a.slice(length - 2, length);
    const arrLastIndex = ['11', '12', '13', '14'];       
    if (arrLastIndex.includes(lastTwoIndex,0)) {//когда число оканчивается на 11,12,13,14, то нужно добавить слово 'рублей'
         return 'рублей';
    } else {
        switch (a.charAt(length - 1)) {
            case '0':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9': return 'рублей';
            case '1': return 'рубль';
            case '2':
            case '3':
            case '4': return 'рубля';
        }    
    }
}
let money = prompt('Какую сумму вы хотите положить на ваш счет?');
if (!isNaN(money)) {
    let rouble = roubleDeclension(money);
    alert(`Ваша сумма в ${money} ${rouble} успешно зачислена.`);
} else {
    alert('Нужно ввести число');
}
