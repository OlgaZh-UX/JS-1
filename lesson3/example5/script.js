'use strict';
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

/*
Получить все товары, у которых есть фотографии
*/
function hasPhoto(item) {
    if (item.hasOwnProperty('photos') && item.photos.length > 0)
        return true;
}
/*
Отсортировать товары по цене, от низкой к высокой
*/
function sortLowPrice(item1, item2) {
    return item1.price - item2.price;
}

console.log(products.filter(hasPhoto));
console.log(products.sort(sortLowPrice));
