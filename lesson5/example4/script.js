'use strict';
const buttons = document.querySelectorAll('.product-show-more');
buttons.forEach(function(button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    });
});

function handleClick(clickedButton) {
    const cardNode = clickedButton.target.parentNode;

    const card = {
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        productName: cardNode.querySelector('.product-name'),
        button: cardNode.querySelector('.product-show-more'),
    }

    const textOnButton = card.button.innerText;
    if (textOnButton === 'Подробнее') {
        showMoreText(card);
    } else if (textOnButton === 'Скрыть') {
        hideMoreText(card);
    }
}

function showMoreText(card) {
    card.img.style.display = 'none';
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus sed ducimus. Modi dolorum voluptatum fugit earum soluta repellat sint.';
    card.productName.insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
    card.button.innerText = 'Скрыть';
}

function hideMoreText(card) {
    card.img.style.display = 'block';
    card.wrap.querySelector('.desc').remove();
    card.button.innerText = 'Подробнее';
}